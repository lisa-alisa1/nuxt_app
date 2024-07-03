<template>
    <div class="statis-section">
        <div class="statis-section__content">
                <div class="statis-block">
                    <div class="statis-block__content">
                        <div 
                            class="section" 
                            v-for="item in statisData" 
                            :key="item.title"
                        >
                            <div class="section__data">
                                <div>
                                    <img :src="`/img/statistic${item.icon}`" alt="">
                                    {{item.title}}
                                </div>
                                {{ item.value }}
                            </div>
                            <div class="section__progress">
                                <input 
                                    type="range" 
                                    min="0" 
                                    :max="item.progressPoints[item.progressPoints.length  - 1]" 
                                    v-model="item.value"
                                    class="section__progress-bar"
                                >
                                <div class="section__progress-point">
                                    <span v-for="point in item.progressPoints">
                                        {{point}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>


<script setup>
const statisData = ref([
    {
        title: 'Wallets', 
        icon: '/wallet.svg',
        value: 560,
        progressPoints: [0, 250, 500, 1000]
    },
    {
        title: 'Transactions', 
        icon: '/transactions.svg',
         value: 75,
         progressPoints: [0, 50, 100, 200]
    },
    {
        title: 'Services', 
        icon: '/services.svg',
         value: 23,
         progressPoints: [0, 20, 40, 80]
    },
])
</script>


<style lang="scss" scoped>
    .statis-section {
        width: 100%;
        display: flex;
        justify-content: center;

        &__content{
            width: 100%;    
            margin: 5rem 0 ;
        }
 

        .statis-block {
            background-color: rgba(19, 23, 39, 1);
            color: rgba(255, 255, 255, 1);  
            border-radius: 20px;
            font-family: 'Sora';
            

            &__content {
                padding: 30px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                .section {
                    height: 7.3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    &__data {
                        display: flex;
                        justify-content: space-between;
                        font-size: 28px;
                        font-weight: 700;

                        div {
                            display: flex;
                            align-items: center;
                            font-size: 18px;
                            font-weight: 600;


                            img {
                                margin-right: 10px;
                            }
                        }
                    }

                    &__progress {
                        margin-top: 3%;
                 
                    }
                    &__progress-bar {
                        width: 100%;
                    }
                    &__progress-point {
                        display:none;
                    }
                }
            }
        }
    }


    @media (min-width: 1512px) {
        .statis-section {
            background-color: rgba(8, 11, 24, 1);
            background-image: url("../assets/img/bg-statis.svg");
            background-size: cover;

            &__content {
                margin:  5rem 0;
                display: flex;
                justify-content: center;
                
                .statis-block {
                    border: 2px solid rgba(255, 255, 255, 0.03);
                    width: 620px;

                    &__content {
                        padding: 30px 60px;

                        .section {
                            height: 11.46rem;

                            &__progress-point {
                                display: flex;
                                justify-content: space-between;
                                color: rgba(102, 112, 152, 1);
                                font-size: 14.9px;
                                font-family: 'Inter';
                                font-weight: 500;   
                            }
                        }
                    }
                }

                &__data {
                    font-size: 40px;
                    div {
                        font-size: 22.51px;
                    }
                }
                
            }
        }
    }
</style>