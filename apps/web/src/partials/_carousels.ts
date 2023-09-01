import { html } from 'lit';

export const Carousels = html`
<button slot="tablist">Carousels</button>
  <div slot="Carousels">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage><studs-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel></presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid -single">
        <h2>Homebrew</h2>
        <presentational-component>
          <studs-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel>
        </presentational-component>
        <h2>Splide</h2>
        <presentational-component>
          <studs-splide-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel>
        </presentational-component>
      </div>
    </div>
  </div>
    `;
