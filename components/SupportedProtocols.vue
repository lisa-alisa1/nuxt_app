<template>
    <div class="suppotred-protocols">
        <div class="suppotred-protocols__content">
            <h2 class="suppotred-protocols__title" >
                Supported Protocols
            </h2>
            <div class="suppotred-protocols__text">
                <p>
                    Supports a variety of Ethereum
                    networks for seamless exchanges
                </p>
            </div>
            <div class="wrapper">
                <div class="suppotred-protocols__dropdown">
                    <div class="dropdown" @click="toggleDropdown">
                        <button class="dropdown__button">
                            <div>
                                <img :src="`/img/networks${selectedNetworkIcon}`" alt="icon" class="dropdown__icon" />  
                                {{ selectedNetwork }}
                            </div>
                            <img src="../assets/img/arrow-dropdown.svg" alt="">
                        </button>
                        <ul class="dropdown__menu" v-if="isDropdownOpen"> 
                            <li 
                                class="dropdown__item" 
                                v-for="network in protocols" 
                                :key="network.title"
                               @click="selectNetwork(network.title, network.icon)"
                            >
                                <img :src="`/img/networks${network.icon}`" alt="icon" class="dropdown__icon" />
                                {{ network.title }}
                            </li>
                        </ul>
                        <ul class="desktop"> 
                            <li 
                                class="dropdown__item" 
                                v-for="network in protocols" 
                                :key="network.title"
                                :class="{'active-network': selectedNetwork === network.title }" 
                                @click="selectNetwork(network.title)"
                            >
                                <img :src="`/img/networks${network.icon}`" alt="icon" class="dropdown__icon" />
                                {{ network.title }}
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="suppotred-protocols__protocols">
                    <div class="tabs">
                        <div class="tabs__header"> 
                            <div 
                                class="tab" 
                                v-for="tab in tabs" 
                                :key="tab" 
                                :class="{'active-tab': activeTab === tab }" 
                                @click="activeTab = tab"
                            >
                                <img src="../assets/img/bridges-icon.svg" alt="" class="tab-icon">
                                {{ tab }}
                            </div>
                        </div>
                        <hr />
                        <div class="tabs__content">
                            <ul class="protocols-list">
                                <li class="protocols-list__item" v-for="service in servicesForTab" :key="service">
                                    <nuxt-link :to="service.link">
                                        <div>
                                            <img :src="`/img${service.icon}`" alt="">
                                            {{service.name}}
                                        </div>
                                        <img src="../assets/img/services-arrow.svg" alt="">
                                    </nuxt-link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { protocols } from '../data/data.ts'; 


const isDropdownOpen = ref(false);
const networks = ref(protocols.map(protocol => protocol.title));
const selectedNetwork = ref(networks.value[0]);
const selectedNetworkIcon = ref('/Ethereum.svg');
const tabs = ref(protocols.map(tab => Object.keys(tab.services))[0])
const activeTab = ref('bridges');

const servicesForTab = computed(() => {
  const protocol = protocols.find(el => el.title === selectedNetwork.value);
  if (protocol && protocol.services[activeTab.value]) {
    return protocol.services[activeTab.value];
  }
  return [];
});

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectNetwork(network, icon) {
    selectedNetwork.value = network;
    selectedNetworkIcon.value = icon;
    isDropdownOpen = false; 
}
</script>


<style lang="scss" scoped>
@import '../scss/mixins';

.suppotred-protocols {

    &__content {
        margin-top: 10px;
    }

    &__title {
        font-size: 34px;
    }

    &__text  {
        margin-top: 1rem;
        margin-bottom: 1rem;

        p {
        font-size: 16px;
        width: 74%;
        }
    }

    &__dropdown {
        .dropdown {
            position: relative;
            width: 100%;

            &__button {
            @include content-form;
            padding: 10px 16px;
            height: 64px;

                div {
                    display: flex;
                    align-items: center;
                    width: 100%;

                    img {
                        margin-right: 3%;
                    }
                }
            }

            &__menu {
                position: absolute;
                top: 85%;
                left: 0;
                background-color: #FEFEFE;
                border: none;
                list-style: none;
                margin: 0;
                padding: 0;
                    padding-top: 5%;
                    width: 100%;
                    z-index: 1;
                    border-radius: 0 0 15px 15px;
                }
                .desktop {
                    display: none;
                }

                &__item {
                    padding: 0px 16px;
                    height: 3rem;
                    cursor: pointer;
                    font-family: 'Inter';
                    font-size: 18px;
                    font-weight: 500;
                }
        }
    
    }

    &__protocols {
        .tabs {
            margin-top: 1rem;
            @include content-form;
            flex-direction: column;
            align-items: start;
            box-sizing: border-box;
            overflow: hidden;
            max-height: 460px;

            &__header {
                font-size: 24px;
                font-weight: 700;
                display: flex;
                overflow-x: auto;
                white-space: nowrap;
                width: 100%;
                padding: 20px;
                
                .active-tab {
                    background-color: rgba(0, 148, 255, 0.07)
                }
                .tab {
                    flex: 0 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Inter';
                    font-size: 18px;
                    line-height: 32px;
                    font-weight: 500;
                    color: #131727;
                    height: 40px;
                    padding: 5px 15px;
                    text-transform: capitalize;
                    margin-right: 10px;
                    border-radius: 16px;

                    .tab-icon {
                        margin-right: 10px;
                    }
                }
            
        }

        &__header::-webkit-scrollbar {
            width:0;
        }
        hr {
             border: 1px solid rgba(243, 245, 248, 1);
             width: 100%;
        }

        &__content {
            margin-top: 1rem;
            padding: 20px;
            width: 89%; 
            flex-grow: 1;
            overflow-y: auto;

                .protocols-list {
                    list-style: none;
                    padding: 0;
                    

                    &__item  a{
                        display: flex;
                       align-items: center;
                       justify-content: space-between;
                        padding: 12px 16px;
                        border: 1px solid #ccc;
                        font-family: 'Inter';
                        border-radius: 20px;
                        margin-bottom: 8px;
                        width: 80%;
                        height: 64px;
                        border: 1px solid rgba(243, 245, 248, 1);
                        color: rgba(19, 23, 39, 1);
                        font-weight: 500;

                      

                            div {
                                display: flex;
                                align-items: center;

                                img {
                                    margin-right: 15px;
                                }
                            }
                    }
                }
            }
        }
    }
}

@media(min-width: 1512px) {
    .suppotred-protocols {
        &__content {
            margin-top: 4rem;
            margin-bottom: 200px;
        }
        &__title , &__text {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                text-align: center;
                font-size: 22px;
            }
        }
        &__title {
            font-size: 52px;
        }

        .wrapper {
            display: flex;
            justify-content: center;
            align-items: start;
            margin-top: 5rem;
        }
        &__dropdown , &__protocols {
            margin: 0 40px;
        }

        &__dropdown {
            width: 20%;

            .dropdown {
                
                &__button, &__menu {
                    display: none;
                }


                &__item {
                    padding: 0;
                }
                .desktop::-webkit-scrollbar {
                    width: 0;
                }
                .desktop {
                    @include content-form;
                    display: block;
                    border-radius: 32px;
                    max-height: 600px;
                    padding: 20px;
                    box-sizing: border-box;
                    overflow-y: scroll; 


                    li {
                        font-size: 20px;
                        line-height: 32px; 
                        height: 5rem;
                        display: flex;
                        align-items:center;
                        padding-left: 20px;
                        
                        img {
                            margin-right: 10px;
                        }
                    }
                    .active-network {
                         background-color: rgba(0, 148, 255, 0.07);
                        border-radius: 24px;
                    }
                }
            
            }
        }

        &__protocols {
            width: 50%;

            .tabs {
                margin-top: 0;
                min-height: 600px;
                
                &__header {
                    overflow-x: hidden;
                    width: 95%;
                    justify-content: space-between;

                    .tab {
                        font-size: 20px;
                        height: 50px;
                        padding: 5px 28px
                    }
                }

                &__content {
                    overflow-y: hidden;
                    width: 100%;

                    .protocols-list {
                        display: flex;
                        flex-wrap: wrap;

                        &__item {
                            width: 28%;
                            margin-right: 2%;

                            a {
                                width:  -webkit-fill-available;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }

    }
}
</style>