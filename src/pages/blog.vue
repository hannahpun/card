<template>
<div>
    <h5><span class="badge badge-primary">BLOG</span></h5>
    <card :list="list">
        <div slot="cardBottom">
            <div class="caption">
                <img class="img-circle" src="static/images/actor.jpg" alt="Prototype Hacker Mark Wu">
                <span class="actor">#psdmac@gmail.com</span>
                <span class="date"><span class="oi oi-calendar"></span>Oct 17</span>
            </div>
        </div>
    </card>
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
                    img: "static/images/v1.jpg",
                    title: "vampire dairy",
                    like: 56,
                    tag:'news'
                },{
                    img: "static/images/v2.jpg",
                    title: "cool",
                    like: 3455676767,
                    tag:'hot'
                }
            ]
        }
    }
}
</script>

<style>
.img-circle{
    width: 30px;
    height: 30px;
    border-radius: 15px;
}
.caption{
    font-size: 13px;;
}
.actor{
    margin-right: 15px;
}
.oi{
    padding-right: 5px;
}
</style>
