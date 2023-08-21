import { isDocument } from '@bloomreach/spa-sdk';

export function generateMenuCollection(collection) {
  if (collection)
    return collection.map((item) => {
      return {
        name: item.getName(),
        link: item.getLink(),
        depth: item.getDepth(),
        selected: item.isSelected(),
        children: generateMenuCollection(item.getChildren()),
      };
    });

  return [];
}

export const GTM_ID = 'GTM-5RB58N';

// Implement Analytics
const analyticsCheck = () => {
  return typeof window !== 'undefined' && GTM_ID !== undefined && GTM_ID !== '';
};

export const analyticsForms = (name, action) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
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
export const analyticsFormErrors = (name, error) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
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
export const analyticsEmailSumbission = (method) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
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
export const analyticsSearch = (searchTerm, searchType) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
      event: 'onsite_search',
      search_term: searchTerm,
      search_type: searchType,
    });
  }
};
/**
 * Tag Management: Main Navigation
 * @param linkValue the value for the link clicked, by concatenating the hierarchical navigation elements
 * @param linkLocation the value for the location of the link clicked (header, footer)
 */
export const analyticsNavigationAction = (linkValue, linkLocation) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
      event: 'navigation click',
      link_value: linkValue,
      link_location: linkLocation,
    });
  }
};

/**
 * Tag Management: Social Media Follow
 * @param socialNetwork Social network selected
 * @param exitURL URL of the social media link
 */
export const analyticsSocialMediaFollow = (socialNetwork, exitURL) => {
  if (analyticsCheck()) {
    window.dataLayer?.push({
      event: 'social media follow',
      social_network: socialNetwork,
      exit_link_url: exitURL,
      property_referral: 'true',
    });
  }
};

/**
 *
 * @param {*} link
 * @param {*} page
 * @returns
 */
export function getUrlFromLinkCompound(link, page) {
  const result = {};

  if (link?.[0]) {
    if (link[0].link) {
      result.link = link[0].link;
    } else {
      const doc = page?.getContent(link[0]);
      if (isDocument(doc)) {
        result.link = doc?.getUrl();
      } else {
        result.error = 1;
      }
    }
  } else {
    result.error = 2;
  }

  return result;
}
