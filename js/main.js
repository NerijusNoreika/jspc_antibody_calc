const productCoeficient  = 0.142,
      positiveThreshold  = 7.1;

new Vue({
    el: '#container',
    data: {
        answer: null,
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
                return Number.parseFloat(this.answer * productCoeficient).toFixed(2);
            },
            set: function(val) {
                this.answer = val;
            }
        },
        computedPositive: function() {
            if (this.computedAnswer > positiveThreshold) {
                this.positive = true;
                return 'teigiamas (positive)';
            } else {
                this.positive = false;
                return 'neigiamas (negative)';
            }
        }
    }
})