<template>
    <div>
        <h1>create new book</h1>
        <div class="ui four column grid">
            <div class="row">

                <div class="column">
                    <div class="ui form">
                        <div class="field">
                            <label>title</label>
                            <input type="text" v-model="book.title">
                        </div>
                        <div class="field">
                            <label>description</label>
                            <textarea rows="2" v-model="book.description"></textarea>
                        </div>
                        <div class="ui button" v-bind:class="{loading: avatar.isUploading}">

                            <file-upload v-show="!avatar.url"
                                         style="position: relative;
                                 top: 50%;"
                                         title="upload book avatar"
                                         post-action="/api/upload"
                                         accept="accept"
                                         name="avatar"
                                         :events="events"
                                         :auto="true"
                            ></file-upload>
                            <!--<div v-if="avatar.isUploading" class="ui active inverted dimmer">-->
                            <!--<div class="ui text loader">working. {{avatar.progress}}%</div>-->
                            <!--</div>-->
                        </div>
                        <button class="ui button green" v-bind:class="{disabled: !complete}" @click="save"
                                type="submit">save it!
                        </button>
                    </div>
                </div>
                <div class="column" v-if="edited">
                    <div class="header"> preview</div>
                    <div class="ui card">
                        <div class="image">
                            <img v-bind:src="book.avatar">
                        </div>
                        <div class="content">
                            <a class="header">
                                {{book.title}}
                            </a>
                            <div class="meta">
                                <!--<span class="date">added on {{book.created_at}}</span>-->
                            </div>
                            <div class="description">
                                {{book.description}}
                            </div>
                        </div>
                        <!--<div class="extra content">-->
                        <!--<a>-->
                        <!--<i class="user icon"></i>-->
                        <!--hot-->
                        <!--</a>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<style>
</style>
<script>
    import FileUpload from 'vue-upload-component'


    export default{
        data(){
            return {
                events: {
                    add(file, component) {
                        component.active = true;
                        file.headers['X-Filename'] = encodeURIComponent(file.name)
                        file.data.finename = file.name
                    },
                    progress(file, component) {
                        component.$parent.$data.avatar.progress = file.progress;
                    },
                    after(file, component) {
                        component.$parent.$data.avatar.isUploading = false;
//                        component.$parent.$data.avatar.url = file.response.url;
                        component.$parent.$data.book.avatar = file.response.url;
                    },
                    before(file, component) {
                        component.$parent.$data.avatar.isUploading = true;
                        component.$parent.$data.avatar.progress = 0;
                    }
                },
                avatar: {
                    isUploading: false,
                    url: null,
                    progress: 0
                },
                book: {
                    title: null,
                    description: null,
                    avatar: null
                }
            }
        },
        components: {
            FileUpload
        },
        methods: {
            save(){
                Vue.http.post('api/book', this.book).then((response) => {
                    this.$router.push({name: 'shelve'});
                    noty({text: 'woppie! book added!', timeout: 3000, type: 'success'})
                }, (response)=> {
                    noty({text: 'whoops. something went wrong. please contact developers', type: 'alert'})
                });
            }
        },
        computed: {
            complete(){
                if ((this.book.title && this.book.title.length > 0)
                        && (this.book.description && this.book.description.length > 0)
                        && (this.book.avatar && this.book.avatar.length > 0))
                    return true;
            },
            edited() {
                if (this.book.title && this.book.title.length > 0) return true;
                if (this.book.description && this.book.description.length > 0) return true;
                if (this.book.avatar && this.book.avatar.length > 0) return true;
            }
        }


    }
</script>
