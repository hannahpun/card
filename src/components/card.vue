<template>
<div class="row">
    <div class="col-sm" v-for="item in list">
        <div class="card">
            <img class="card-img-top" :src="item.img">
            <div class="card-body">
                <h4 class="card-title">{{item.title}}</h4>
                <span class="badge badge-primary">{{item.tag}}</span>
                <p class="card-text"><small class="text-muted">like</small>{{item.like}}</p>
                <slot name='cardBottom'>
                    <!-- 包裹在 slot 裡面的這段 code 是預設 -->    
                    <span class="blog__date"><span class="oi oi-calendar"></span>Oct 17</span>
                </slot>
            </div>
        </div>
    </div>
</div>

  
</template>

<script>
export default {
    props: {
        // attribute name: Type
        list: Array
    }
}
</script>
<style>
.card-body{
    position: relative;
}
.card .badge{
    position: absolute;
    top: 25px;
    right: 15px;
}
.card{
    text-align: left;
    border-bottom: 4px solid #e9e9e9;
}
</style>
