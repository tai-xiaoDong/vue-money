import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt("请输入标签名");
        if (!name) {
            return window.alert("标签名不能为空！");
        }
        this.$store.commit("createTag", name);
        if (this.$store.state.createTagError) {
            if (this.$store.state.createTagError.message === 'tag name duplicated') {
                window.alert('标签名重复了！')
            }
        }
    }
}

export default TagHelper;