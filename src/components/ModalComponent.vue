<template>

    <div class="modal_bloc" v-if="reveal">

        <div class="overlay" @click="toggleModal"></div>

        <div class="modal_ card">
            <add-customer :currentCustomer="currentCustomer">
                <button class="btn form-btn cancel" @click="toggleModal" type="button">&times;</button>
            </add-customer>
        </div>

    </div>


</template>


<script>
    import AddCustomer from './AddCustomer';
    export default{
        name: 'modal-component',
        props: ['reveal', 'toggleModal', 'currentCustomer'],
        components: {
            AddCustomer
        },
    }
</script>


<style scoped>
    .modal_bloc{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal_{
        background: white;
        min-width: 40%;
        color: #333;
        position: fixed;
        border: none;
        padding: 0 20px;
        border-radius: 1.5rem;
        position: fixed;
        top: 10%;
    }

</style>
