import {
  Document,
  Page,
  Reference,
  initialize,
  isDocument,
} from '@bloomreach/spa-sdk';
import axios from 'axios';
import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { getWindow } from '../utils/shared';

export interface Menu {
  name: string;
  link: {
    href: string;
    target?: string;
  };
  depth: number;
  selected: boolean;
  children: Menu[];
}

interface CTALinkCompound extends Reference {
  $ref: string;
  link: string;
}

export enum LinkCompoundError {
  NOT_DOCUMENT = 1,
  NOT_DEFINED = 2,
}
interface LinkCompoundUrl {
  link?: string;
  error?: LinkCompoundError;
}

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithBloomreachInterface {
  GTM_ID?: string;
  _page?: Page;
  _isPreview: boolean;
  generateMenuCollection: (collection: any[]) => Menu[] | [];
  getUrlFromLinkCompound: (
    link?: CTALinkCompound[],
    page?: Page
  ) => LinkCompoundUrl;
  analyticsCheck: () => boolean;
  analyticsPageView: (pageType: string) => void;
  analyticsSocialMediaFollow: (socialNetwork: string, exitURL: string) => void;
  analyticsVideoAction: (videoName: string, action: boolean) => void;
  analyticsCTAClick: (ctaText: string, componentID: string) => void;
  analyticsNavigationAction: (
    linkValue: string,
    linkLocation: 'header' | 'footer'
  ) => void;
  analyticsContentExpansion: (
    contentID: string,
    contentType: string,
    componentID: string
  ) => void;
  analyticsCarouselSlide: (componentID: string) => void;
  analyticsDownloads: (contentID: string) => void;
  analyticsForms: (name: string, action: string) => void;
  analyticsFormErrors: (name: string, error: string) => void;
  analyticsEmailSumbission: (method: string) => void;
  analyticsSearch: (searchTerm: string, searchType: string) => void;
}

export const WithBloomreach = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class WithBloomreachClass extends superClass {
    @property({ type: String }) GTM_ID?: string = 'GTM-5RB58N';
    @state() protected _page?: any;
    @state() protected _isPreview: boolean = false;
    private window = getWindow(this);

    private async init() {
      const url = new URL(this.window.location.href);
      const isStrongtie =
        url.host === 'www.strongtie.com' ||
        url.host === 'strongtie.bloomreach.io' ||
        url.host === 'www2.strongtie.com';
      this._page = await initialize({
        path: isStrongtie ? url.toString() : `https://www.strongtie.com`,
        endpoint:
          'https://strongtie.bloomreach.io/delivery/site/v1/channels/sst-site/pages',
        httpClient: axios,
      });
      this._isPreview = this._page.isPreview();
    }

    constructor(...args: any[]) {
      super(...args);
      this.init();
    }

    /**
     *
     * @param collection Array of Bloomreach Menu
     * @returns
     */
    protected generateMenuCollection(collection: any[]): Menu[] | [] {
      if (collection)
        return collection.map((item) => {
          return {
            name: item.getName(),
            link: item.getLink(),
            depth: item.getDepth(),
            selected: item.isSelected(),
            children: this.generateMenuCollection(item.getChildren()),
          };
        });

      return [];
    }

    protected getUrlFromLinkCompound(
      link?: CTALinkCompound[],
      page?: Page
    ): LinkCompoundUrl {
      const result: LinkCompoundUrl = {};

      if (link?.[0]) {
        if (link[0].link) {
          result.link = link[0].link;
        } else {
          const doc = page?.getContent<Document>(link[0]);
          if (isDocument(doc)) {
            result.link = doc?.getUrl();
          } else {
            result.error = LinkCompoundError.NOT_DOCUMENT;
          }
        }
      } else {
        result.error = LinkCompoundError.NOT_DEFINED;
      }

      return result;
    }

    // Analytics functions
    analyticsCheck = (): boolean => {
      return (
        typeof this.window !== 'undefined' &&
        this.GTM_ID !== undefined &&
        this.GTM_ID !== ''
      );
    };

    /**
     * Tag Management: Page Type
     * @param pageType High-level page type value
     */
    analyticsPageView = (pageType: string): void => {
      if (this.analyticsCheck() && pageType) {
        this.window.dataLayer?.push({
          event: 'GAPageview',
          page: {
            page_type: pageType,
          },
        });
      }
    };

    /**
     * Tag Management: Social Media Follow
     * @param socialNetwork Social network selected
     * @param exitURL URL of the social media link
     */
    analyticsSocialMediaFollow = (
      socialNetwork: string,
      exitURL: string
    ): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'social media follow',
          social_network: socialNetwork,
          exit_link_url: exitURL,
          property_referral: 'true',
        });
      }
    };

    /**
     * Tag Management: Video Play
     * @param videoName Name / ID of the video selected
     * @param action The action being taken with the video (true if play, false if pause)
     */
    analyticsVideoAction = (videoName: string, action: boolean): void => {
      const title =
        videoName.match(/(embed\/|v=)([^&?\s]*)/)?.at(-1) || videoName;
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'video play',
          video_name: title,
          video_action: action ? 'play' : 'pause',
        });
      }
    };

    /**
     * Tag Management: Cta Clicks
     * Measures the usage of call to action buttons/links on the site that are not
     * already captured as part of another, more specific, event
     * @param ctaText Value for the text or label of the link clicked
     * @param componentID Name/id of the component containing the CTA
     */
    analyticsCTAClick = (ctaText: string, componentID: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'cta click',
          cta_click_text: ctaText,
          component_id: componentID,
        });
      }
    };

    /**
     * Tag Management: Main Navigation
     * @param linkValue the value for the link clicked, by concatenating the hierarchical navigation elements
     * @param linkLocation the value for the location of the link clicked (header, footer)
     */
    analyticsNavigationAction = (
      linkValue: string,
      linkLocation: 'header' | 'footer'
    ): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'navigation click',
          link_value: linkValue,
          link_location: linkLocation,
        });
      }
    };

    /**
     * Tag Management: Content Expansion
     * @param contentID The value of the id for the selected content
     * @param contentType Value for the type of content being viewed
     * @param componentID value for the ID of the component being expanded
     */
    analyticsContentExpansion = (
      contentID: string,
      contentType: string,
      componentID: string
    ): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'content expansion',
          content_id: contentID,
          content_type: contentType,
          component_id: componentID,
        });
      }
    };

    /**
     * Tag Management: Carousel Slide
     * @param componentID Name/id of the carousel being engaged with
     */
    analyticsCarouselSlide = (componentID: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'carousel scroll',
          component_id: componentID,
        });
      }
    };

    /**
     * Tag Management: Downloads
     * @param contentID Value of the ID for the item being downloaded
     */
    analyticsDownloads = (contentID: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'download',
          content_id: contentID,
        });
      }
    };

    /**
     * Tag Management: Forms
     * @param name Form name
     * @param action Form action: start | submit
     */
    analyticsForms = (name: string, action: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'form_action',
          form_name: name,
          form_action: action,
        });
      }
    };

    /**
     * Tag Management: Form Errors
     * @param name Form name
     * @param error Form error
     */
    analyticsFormErrors = (name: string, error: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'form_error',
          form_name: name,
          form_error: error,
        });
      }
    };

    /**
     * Tag Management: Form Submission
     * @param method the value of the email submission method
     */
    analyticsEmailSumbission = (method: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'email_signup',
          email_submission_method: method,
        });
      }
    };

    /**
     * Tag Management: Search
     * @param searchTerm The value of the term being searched
     * @param searchType Type of search being executed
     */
    analyticsSearch = (searchTerm: string, searchType: string): void => {
      if (this.analyticsCheck()) {
        this.window.dataLayer?.push({
          event: 'onsite_search',
          search_term: searchTerm,
          search_type: searchType,
        });
      }
    };
  }
  return WithBloomreachClass as unknown as Constructor<WithBloomreachInterface> &
    T;
};

declare global {
  interface Window {
    dataLayer?: any;
  }
}
