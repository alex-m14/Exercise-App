<template>
    <v-app>
        <v-card>
        <v-card-title> 
            <h1> USERS</h1>
            </v-card-title>
            </v-card> 
            <v-simple-table>
              <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Username
          </th>
          <th class="text-left">
            Password
          </th>
          <th> ADD/DELETE</th>
        </tr>
        
      </thead>
      <tbody>
        <tr>
          <td>Bob12</td>
          <td>Lfjj12.</td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
    </v-app>
   
</template>
<script>

// @ is an alias to /src
import AdminPage from './AdminPage.vue'

export default {
  name: 'AdminPage',
  components: {
    AdminPage
  }
}
</script>