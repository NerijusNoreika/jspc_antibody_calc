let vue = new Vue({
    el: '#container',
    data: {
        answer: null,
        name: 'nerijus',
        positive: false,
    },
    methods: {
        copyText: function(event) {
            event.target.classList.add("display");
            setTimeout(function () {
                event.target.classList.remove("display");
            }, 800);
            let text = event.target.parentNode.querySelector('span').textContent.trim();
            let input = document.createElement("input");
            document.body.appendChild(input);
            input.value = text;
            input.select();
            input.setSelectionRange(0, text.length);
            document.execCommand("copy");
            document.body.removeChild(input);
        }
        
    }, 
    computed: {
        computedAnswer: {
            get: function() {
                return Number.parseFloat(this.answer * 0.142).toFixed(2);
            },
            set: function(val) {
                this.answer = val;
            }
        },
        computedPositive: function() {
            if (this.computedAnswer > 7.1) {
                this.positive = true;
                return 'teigiamas (positive)';
            } else {
                this.positive = false;
                return 'neigiamas (negative)';
            }
        }
    }
})