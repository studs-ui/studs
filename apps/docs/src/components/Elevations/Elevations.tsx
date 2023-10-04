import React from 'react';
import DistinguishSvg from './assets/distinguish.svg';
import OverlapSvg from './assets/overlap.svg';
import DistanceAndHighlightSvg from './assets/distanceAndHighlight.svg';
import LightMode from './assets/lightMode.svg';
import styles from './styles.module.css';
import DistanceAndHighlight3DImage from './assets/distanceAndHighlight3D.png';
import ElevationA from './assets/elevationA.svg';
import ElevationAContent from './assets/elevationAContent.svg';
import ElevationB from './assets/elevationB.svg';
import ElevationBContent from './assets/elevationBContent.svg';
import ElevationC from './assets/elevationC.svg';
import ElevationCContent from './assets/elevationCContent.svg';

const ElevationSection = ({ title, subTitle, exampleImage, content }) => {
  return (
    <div className={styles.elevationSection}>
      <div>
        <h4>{title}</h4>
        <h4>{subTitle}</h4>
        {exampleImage}
      </div>
      <div>{content}</div>
    </div>
  );
};

const ImageWithTitle = ({ title = '', image }) => {
  return (
    <div className={styles.imageAndTitle}>
      {image}
      {!!title && <div className={styles.imageDescription}>{title}</div>}
    </div>
  );
};

export const Elevations = () => {
  return (
    <>
      <p>
        Each elevation level produces a three-dimensional appearance to an
        object with shadows and blur spans applied. As the elevation levels
        increase from 1 to 4, the elevation level’s shadow and blur span
        increases along the X-axis and Y-axis. This increase in elevation level
        allows the object to achieve a three-dimensional appearance of more
        depth along the Z-axis. There are three different options for elevation
        positioning: left shadows, bottom shadows, and right shadows.
      </p>
      <section>
        <h4>Elevation settings</h4>
        <p>
          While STUDS will automatically contain the correct settings by level,
          it’s important to understand how those values are configured. Also
          note that when increasing elevation levels, the defined axes weight
          and blur increases.
        </p>
        <p>
          X-axis: This is the offset of the drop shadow along the horizontal
          plane or X-axis, which controls the top and bottom shadow.
        </p>
        <p>
          Y-axis: This is the offset of the drop shadow along the vertical plane
          or Y-axis, which controls the direction of the right and left shadows.
        </p>
        <p>Blur: This adjusts the blur or feathering of the shadow color.</p>
        <p>
          Spread: This adjusts the size of the shadow to represent the distance
          between the foreground and background.
        </p>
        <p>
          Drop shadow: This shadow is applied to the outside of the layer,
          creating the illusion of three-dimensionality.
        </p>
        <br />
        <p>
          When deciding which elevation level to use, consider these best
          practices:
        </p>
        <ul>
          <li>
            Narrow a user’s focus by increasing elevationUsers will focus more
            on objects that appear closer to the eye. If you want users to
            prioritize one action above others, increase the elevation level.
          </li>
          <li>
            Choose an elevation that simulates real lightingAmbient light
            requires a softer edge or less elevation, whereas more direct light
            would use a higher contrasting shadow or elevation level.
          </li>
          <li>
            Don’t overuse elevation. Applying elevation to too many objects can
            lead to a poor experience that distracts the user.
            <b> Use it sparingly.</b>
          </li>
        </ul>
        <div>
          <ElevationSection
            title={'Elevation A'}
            subTitle={'Bottom'}
            exampleImage={<ElevationA />}
            content={<ElevationAContent />}
          />
          <ElevationSection
            title={'Elevation B'}
            subTitle={'Left'}
            exampleImage={<ElevationB />}
            content={<ElevationBContent />}
          />
          <ElevationSection
            title={'Elevation C'}
            subTitle={'Right'}
            exampleImage={<ElevationC />}
            content={<ElevationCContent />}
          />
        </div>
      </section>

      <section>
        <h4>Usage</h4>
        <p>
          Elevation is commonly used to create distance between objects, to set
          the direction of a light source, to make objects stand out against a
          background, and to give more dimension to elements.
        </p>
        <b>To distinguish between two levels of elevation</b>
        <p>
          If there are two different levels of elevation in an experience, raise
          the elevation level on the highest-priority item to eliminate
          confusion and differentiate between surfaces.
        </p>
        <ImageWithTitle
          title="Different levels of elevation should be layered to show contrast between design elements. Here, the modal notification is given a higher visual priority through a higher elevation level than the cards behind it."
          image={<DistinguishSvg />}
        />

        <b>For overlapping experiences</b>
        <p>
          Elevation is commonly used with notifications that require user
          interaction or when backgrounds are the same color but don’t offer
          enough contrast. Adding more depth to objects helps prioritize that
          action above others.
        </p>
        <ImageWithTitle
          title="To highlight the priority of this notification, this example uses elevation to draw the user’s attention to that element and highlight its importance on the page."
          image={<OverlapSvg />}
        />

        <b>To distance objects or highlight motion</b>
        <p>
          For some components, elevation is used for hover states, such as an
          accordion hover.
        </p>
        <ImageWithTitle
          title="Elevation can form a part of an element’s hover state in order to highlight a user’s interaction with it more clearly."
          image={<DistanceAndHighlightSvg />}
        />
        <ImageWithTitle
          title="Elevation can form a part of an element’s hover state in order to highlight a user’s interaction with it more clearly."
          image={<img src={DistanceAndHighlight3DImage} />}
        />

        <p>
          Objects exist in a three-dimensional plane at different depths,
          represented here by the Y-axis. Each higher depth uses increased
          shadows to create four levels of elevation:
        </p>
        <ol>
          <li>
            Elevation Level 1 in this diagram will appear to have the least
            amount of depth on a page because it falls lower on the Z-axis.
          </li>
          <li>
            Elevation Level 2 is higher on the Z-axis, rising above Level 1.
          </li>
          <li>
            Elevation Level 3 will fall between the highest level and the lowest
            levels of elevation.
          </li>
          <li>
            Elevation Level 4 is the highest on the Z-axis and will appear to
            have the most depth and dimension on a page.
          </li>
        </ol>

        <ImageWithTitle image={<LightMode />} />

        <b>Accessibility</b>
        <p>
          Don’t use a shadow for style onlyDrop shadows or similar effects
          create confusion for sighted users when viewed alongside elevated
          elements, and should be avoided.
        </p>
      </section>
    </>
  );
};
