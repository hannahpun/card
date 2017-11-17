<template>
<div>
    <h5><span class="badge badge-primary">COURSES</span></h5>
    <card :list="list" />
</div>
    


  
</template>

<script>

import card from '@/components/card'

export default {
    components: {card},
    data () {
        return {
            list: [
                {
                    img: "static/images/img.jpg",
                    title: "Beauty and Beast",
                    like: 3029,
                    tag:'hot'
                },{
                    img: "static/images/img2.jpg",
                    title: "Cinderella",
                    like: 111,
                    tag:'hot'
                },{
                    img: "static/images/img3.jpg",
                    title: "game name1",
                    like: 3,
                    tag:'new'
                }
            ]
        }
    }
}
</script>
