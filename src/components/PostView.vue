<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat(catUrl, title)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  import postCat from '@/mixins/postCat'

  export default {
    mixins: [postCat],
    data () {
      return {
        'catUrl': null,
        'title': null
      }
    },

    mounted () {
      this.$http.get('https://api.thecatapi.com/v1/images/search?format=json', {
        headers: {
          'x-api-key': '6e2d6da9-03bd-4b3a-a4e1-290e68e3fd79',
          'Content-Type': 'application/json'
        }}).then(response => {
          this.catUrl = response.body[0].url
        }).catch(err => {
          console.log(err)
        })
    }
  }

</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
