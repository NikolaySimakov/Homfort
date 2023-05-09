<template>
  <div id="app">
    <header id="up" class="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
      <div class="h-screen bg-opacity-35 bg-black" style="background:rgba(0,0,0,0.35);">
        <NavBar></NavBar>
        <div class="flex items-center justify-center">
          <div class="mx-2 text-center mt-20">
            <div class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <h1>Make your interior more</h1>
              <h1>minimalistic & modern</h1>
            </div>
            <div class="text-lg text-gray-200 my-6">
              <p>Turn your room with panto into a lot more minimalist</p>
              <p>and modern with ease and speed</p>
            </div>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </header>
    <fade/>
    <BenefitsList />
    <Goods />
    <About />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import BenefitsList from './components/BenefitsList';
import Goods from './components/Goods';
import About from './components/About';
import Footer from './components/Footer';

export default {
  components: {
    NavBar,
    SearchBar,
    BenefitsList,
    Goods,
    About,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  background: url("./assets/furniture/sofa1.jpg") 100% 100% no-repeat;
  background-size: cover;
  background-position: center;
  max-height: 100vh;
  width: 100%;
}

fade {
    position: absolute;
    bottom: 0px;

    display: block;
  
    width: 100%;
    height: 120px;
  
    background-image: linear-gradient(to bottom, 
        rgba(255, 255, 255, 0), 
        rgba(255, 255, 255, 1)
    100%);
}
</style>
