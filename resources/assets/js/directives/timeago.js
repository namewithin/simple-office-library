/**
 * Created by namewithin on 12/10/16.
 */
import Vue from 'vue'
Vue.directive('timeago', {
    bind: function (el, binding) {
        var time = binding.value;

        switch (binding.arg) {
            case 'timeago':
                var newTime = moment(time).fromNow();
                el.innerHTML = newTime;
                break;

            default:
                break;

        }
    }
});