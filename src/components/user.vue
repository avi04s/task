<template>
    <div>
        <h4>User Component</h4>
        <h5>User ID is : {{userId}}</h5>
    </div>
</template>

<script>

export default {
    name:'user',
    data(){
        return {userId:this.$route.params.id}
    }
    
}
</script>
