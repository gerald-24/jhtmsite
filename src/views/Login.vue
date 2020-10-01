<template>
  <div>
    <v-layout class="mt-5" align-center justify-center>
      <v-card>
        <v-form class="pa-5">
          <a-input
            v-model="email"
            style="margin: 3px"
            addon-before="Email Add"
          />
          <a-input-password
            v-model="password"
            style="margin: 3px"
            addon-before="Password"
          />
          <a-button style="margin: 3px" block @click="login()">Login</a-button>
        </v-form>
      </v-card>
    </v-layout>
  </div>
</template>
<script>
import { firebaseAuth } from "@/firebaseData/db";
import swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created(){},
  methods: {
    login() {
      firebaseAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          // Handle Errors here.

          var errorCode = error.code;
          var errorMessage = error.message;
          //   console.log(errorCode, errorMessage);
          swal.fire(errorCode, errorMessage, "error");
          // ...
        });
    }
  },
};
</script>