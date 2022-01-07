<template>
  <div align="center">
    <h1>Home Component</h1>
    <b-container>
      <b-row>
        <b-col sm="12" lg="3">
          <b-card
            title=""
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <b-row>
                <b-col sm="8" align="left">
                  <span>107,300</span><br />
                  <span style="font-size: 11px">User activity this month</span>
                </b-col>
                <b-col sm="4">
                  <i class="far fa-users"></i>
                </b-col>
              </b-row>
              <b-progress :value="value" :max="max" class="mb-3"></b-progress>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col sm="12" lg="3">
          <b-card
            title=""
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <b-row>
                <b-col sm="8" align="left">
                  <span>430,300</span><br />
                  <span style="font-size: 11px">Page views</span>
                </b-col>
                <b-col sm="4">
                  <i class="fas fa-eye"></i>
                </b-col>
              </b-row>
              <b-progress
                :value="value"
                :max="max"
                class="mb-3"
                variant="success"
              ></b-progress>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col sm="12" lg="3">
          <b-card
            title=""
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <b-row>
                <b-col sm="8" align="left">
                  <span>$ 653,000</span><br />
                  <span style="font-size: 11px">Monthly revenue goal</span>
                </b-col>
                <b-col sm="4">
                  <i class="fas fa-cart-plus"></i>
                </b-col>
              </b-row>
              <b-progress
                :value="value"
                :max="max"
                class="mb-3"
                variant="warning"
              ></b-progress>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col sm="12" lg="3">
          <b-card
            title=""
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <b-row>
                <b-col sm="8" align="left">
                  <span>47,500</span><br />
                  <span style="font-size: 11px">New Mail Recieved</span>
                </b-col>
                <b-col sm="4">
                  <i class="far fa-envelope"></i>
                </b-col>
              </b-row>
              <b-progress
                :value="value"
                :max="max"
                class="mb-3"
                variant="danger"
              ></b-progress>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="5">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="height:430px"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="4">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="height:430px"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col lg="3">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
            
            </b-card-text>
          </b-card>

                 <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
           <b-table striped hover :items="items"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: 33.333333333,
      max: 50,
         items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    };
  },
};
</script>


<style scoped>
.far {
  font-size: 30px;
}
</style>