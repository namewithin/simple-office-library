<template>
    <div>
        <h1>create new book</h1>
        <div class="ui items">
            <div class="item">

                <a class="ui small image" style="height:150px;width:150px; border:1px solid black; text-align: center;">
                    <img v-show="avatar.url" v-bind:src="avatar.url">
                    <file-upload v-show="!avatar.url"
                                 style="position: relative;
                                 top: 50%;"
                                 title="upload book avatar"
                                 post-action="/api/upload"
                                 accept="accept"
                                 name="avatar"
                                 :events="events"
                                 :drop="true"
                    ></file-upload>
                    <div v-if="avatar.isUploading" class="ui active inverted dimmer">
                        <div class="ui text loader">working</div>
                    </div>
                </a>
                <div class="content">
                    <a class="header">Cute Dog</a>
                    <div class="description">
                        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable
                            faces, others for their tiny stature, and even others for their massive size.</p>
                        <p>Many people also have their own barometers for what makes a cute dog.</p>
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
                        console.log('add');
                        if (this.auto) {
                            component.active = true;
                        }
                        component.active = true;

                        file.headers['X-Filename'] = encodeURIComponent(file.name)
                        file.data.finename = file.name
                    },
                    progress(file, component) {
                        console.log('progress ' + file.progress);
                    },
                    after(file, component) {
                        console.log('after');
                        component.$parent.$data.avatar.isUploading = false;
                        component.$parent.$data.avatar.url = file.response.url;
                    },
                    before(file, component) {
                        console.log('before');
                        component.$parent.$data.avatar.isUploading = true;
                    }
                },
                avatar: {
                    isUploading: false,
                    url: null
                },
                book: {
                    title: '',
                    year: '',
                    revision: ''
                }
            }
        },
        created(){

        },
        components: {
            FileUpload
        },
        methods: {},

    }
</script>
