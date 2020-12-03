<template>
  <div>
    <h1> About Page </h1>
    <p> This website is made by Alexandra Maceda for Fall 2020 Web Programming class </p>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Search for your Followers">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="Enter their Name"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
  </div>
  
</template>
<script>
  export default {
    name: 'About',
    
    data() {
        return {
            data: [
                'Angular',
                'Angular 2',
                'Aurelia',
                'Backbone',
                'Ember',
                'jQuery',
                'Meteor',
                'Node.js',
                'Polymer',
                'React',
                'RxJS',
                'Vue.js'
            ],
            name: '',
            selected: null
        }
    },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
  }
  
</script>
