<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">{{ message.message }}</v-card-title>
        <v-card-actions>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import gql from 'graphql-tag';


export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      message:  {
        message: ''
      }
    }
  },
  apollo: {
    message: {
      query: gql`query {
        message: getMessage {
          message
        }
      }
      `
    },
  },
  mounted() {
    console.log(this.$apollo);
    this.$apollo.query({
      query: gql`query {
        message: getMessage {
          message
        }
      }
      `,
    }).then((data) => console.log('=============', data));
  },
}
</script>
