<template>
    <v-app id="inspire">
            <PublicLayoutHeader/>
        <v-main class="mainSection">
            <v-row>
                <v-col 
                    cols="12"
                    sm="6"
                >
                    <div class="alertText">
                        <h1>Ой!</h1>
                        <h2>Похоже, мы не можем найти <br> 
                            нужную вам страницу.
                        </h2>
                        <h4>Код ошибки: 404</h4>
                    </div>
                </v-col>
                
                <v-col
                    cols="12" 
                    sm="6"
                >
                    <div>
                        <img src="../../assets/notfound.gif"/>
                    </div>
                </v-col>
            </v-row>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>
import PublicLayoutHeader from '@/layouts/public-layout/PublicLayoutHeader';
import Footer from '@/components/Footer';
export default {
    name: "404",
    components: {PublicLayoutHeader, Footer}
}
</script>


<style lang="css" scoped>

.mainSection {
    background-color: #ececec;
}

.alertText {
    width: 500px;
    color: #484848;
    float: right;
    text-align: left;
}

.alertText h1 {
    font-size: 130px;
    font-variant: petite-caps;
    line-height: 150px;
    margin-bottom: 20px;
}

.alertText h2 {
    font-size: 35px;
    font-weight: normal;
    line-height: 40px;
    margin-bottom: 20px;
}

</style>