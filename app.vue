<script setup>
import { ref } from 'vue';
const showMenu = ref(false);

const about = ref(null);
const shows = ref(null);
const participants = ref(null);
const contact = ref(null);

function scrollTo(target, event) {
  window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  event.preventDefault();
}

useServerSeoMeta({
  title: 'Spex-SM',
  ogTitle: 'Spex-SM',
  description: 'Svenska mästerskapen i studentspex i Linköping 2024',
  ogDescription: 'Svenska mästerskapen i studentspex i Linköping 2024',
  ogLocale: 'sv_SE',
})

</script>

<template>
  <div class="w-full fixed bg-gray-100 shadow-lg">
    <nav class="flex items-center justify-between flex-wrap  p-6 sm:max-w-[1000px] sm:m-auto">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <div class="px-2 w-20">
          <a href="/"><img src="~/assets/img/logo-notext.png"></a>
        </div>
      </div>
      <div class="block sm:hidden">
        <button @click="showMenu = !showMenu" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="showMenu ? 'block': 'hidden'" class="w-full pl-6 flex-grow sm:justify-end sm:flex sm:items-center sm:w-auto">
          <a href="#about" @click="scrollTo(about, $event); showMenu = false" class=" no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-gray-500 mr-4">
            Om Spex-SM
          </a>
          <a href="#participants" @click="scrollTo(participants, $event); showMenu = false" class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-gray-500 mr-4">
            Deltagare
          </a>
          <a href="#shows" @click="scrollTo(shows, $event); showMenu = false" class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-gray-500  mr-4">
            Föreställningar
          </a>
          <a href="#contact" @click="scrollTo(contact, $event); showMenu = false" class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-gray-500 mr-4">
            Kontakt
          </a>
      </div>
    </nav>
  </div>
  <div
    class="flex justify-center h-screen mb-10 shadow-lg bg-[linear-gradient(to_bottom,rgba(255,255,255,1.0)0%,rgba(255,255,255,1.0)50%,rgba(255,255,255,0.0)100%),url('/assets/img/Pattern_Ikoner_Blue_Small_2.png')]">
    <div class="flex flex-col sm:flex-row-reverse sm:justify-center items-center px-10">
      <div class="pt-32 pb-10 sm:mx-20 sm:min-w-lg sm:max-w-2xl sm:pb-60">
        <img src="~/assets/img/logo_lightback.png">
      </div>
      <div class="flex flex-col items-center sm:pb-30 ">
        <div class="text-3xl pt-6 sm:text-5xl">
          10-11 Maj
        </div>
        <div class="text-xl pt-2 sm:text-3xl">
          Forumteatern
        </div>
        <!-- <div class="pt-10">
          <button class="w-20 text-sm_yellow bg-sm_blue rounded">Biljetter</button>
        </div> -->
        <div class="pt-20">
          <a href="#about"><button @click="scrollTo(about, $event)" class="w-64 h-20 text-2xl bg-sm_yellow text-sm_blue rounded shadow-lg">
            Läs mer
          </button></a>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:max-w-[1000px] sm:mx-auto pb-10">
    <div ref="about" id="about" class="flex flex-col items-center text-center pt-24">
      <div class="px-4 text-2xl font-bold">
        SVERIGES BÄSTA SPEX
      </div>
      <div class="px-4 pt-2">
        Spex-SM är Sveriges studentspex stora chans att visa vad de går för! Under ett
        par varma vårdagar sätter vi upp föreställningar till allmän
        beskådan och kämpar om att vinna priser i olika kategorier, bland annat
        "Sveriges bästa spex".
      </div>
      <div class="px-4 pt-2">
        Spex-SM har sedan 2002 anordnats var 5:e år, senaste gången var i Örebro 2017.
        Något förskjutet tar nu Linköping upp facklan och arrangerar den femte upplagan
        av Spex-SM 2024!
      </div>
      <div class="px-4 pt-2">
        Läs mer om Spex-SM och studentspex på <a class="text-blue-500"
          href="https://sv.wikipedia.org/wiki/Spex-SM">wikipedia</a>.
      </div>

    </div>

    <div ref="participants" id="participants" class="flex flex-col items-center text-center pt-24">
      <div class="px-4 text-2xl font-bold">
        DELTAGARE
      </div>
      <div class="px-4 pt-2 text-center">
        Sveriges studentspex har haft möjlighet att lämna intresseanmälan och
        vara med i planeringsarbetet under vår och sommar 2023. Efter den
        slutgiltiga anmälan i slutet av oktober kommer de deltagande spexen att
        offentliggöras här.
      </div>
    </div>

    <div ref="shows" id="shows" class="flex flex-col items-center text-center pt-24">
      <div class="px-4 text-2xl font-bold">
        FÖRESTÄLLNINGAR
      </div>
      <div class="px-4 pt-2">
        Föreställningarna under Spex-SM är öppna för allmänheten och biljetter
        kommer finnas tillgängliga att köpa online under våren.
      </div>

      <div class="px-4 pt-2">
        Föreställningarna hålls den 10:e och 11:e maj 2024 i Forumteatern på Ågatan 55 i centrala Linköping.
      </div>
      <div class="px-4 py-4 shadow-lg">
        <iframe class="hidden sm:block"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16719.27450128678!2d15.619385!3d58.411789000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f24d5ca95d1%3A0x9feab1b92bab8396!2sForum%20Theatre!5e0!3m2!1sen!2sse!4v1695236138367!5m2!1sen!2sse"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe class="sm:hidden"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4179.72349326141!2d15.614661225689018!3d58.412591607464414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f24d5ca95d1%3A0x9feab1b92bab8396!2sForum%20Theatre!5e0!3m2!1sen!2sse!4v1695150894736!5m2!1sen!2sse"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div ref="contact" id="contact" class="flex flex-col items-center text-center pt-24">
      <div class="px-4 text-2xl font-bold">
        KONTAKTA OSS
      </div>
      <div class="px-4 py-2">
        Spex-SM drivs av den idella föreningen Studentspexmästerskapen.
      </div>
      <div class="px-4 py-2">
        Drivande i arbetet är kommittén, som består av ett gäng universitetsstudenter och alumner som älskar
        studentspex:
      </div>
      <div class="px-4 py-2 flex flex-col sm:flex-row items-stretch flex-wrap">
        <TeamCard name="Natalie Hertzberg" role="Ordförande och projektledare" mail="ordforande@spex-sm.se" />
        <TeamCard name="Karl Linderhed" role="Kassör" mail="kassor@spex-sm.se" />
        <TeamCard name="Erik Faxén" role="Art Director" mail="artdirector@spex-sm.se" />
        <TeamCard name="Fredrik Forsmark" role="Inspicient" mail="inspicient@spex-sm.se" />
        <TeamCard name="Martin Nilsson" role="Deltagaransvarig" mail="deltagaransvarig@spex-sm.se" />
        <TeamCard name="Michelle von Rosen" role="Klubbmästare" mail="km@spex-sm.se" />
        <TeamCard name="Stina Horn" role="Funktionärsansvarig" mail="personal@spex-sm.se" />
      </div>
    </div>

    <div ref="sponsors" id="sponsors" class="flex flex-col items-center text-center pt-24">
      <div class="px-4 text-2xl font-bold">
        SPONSORER
      </div>
      <div class="px-4 py-2">
        Vill du se ditt företags logotyp här och stödja ett nytt och spännande kulturevent i Linköping?
        Hör av dig så diskuterar vi gärna ett samarbete!
      </div>
    </div>
  </div>

  <footer>
    <div class="pb-20 flex flex-col items-center bg-[#f0f0f0]">
      <div class="pt-2">
        <a href="https://www.facebook.com/spexsm/" class="text-blue-500 px-2">Facebook</a>
        <!-- <a href="https://instagram.com/" class="text-blue-500 px-2" >Instagram</a> -->
      </div>
      <div class="pt-2">
        <div class="text-center text-[#888]">
          Föreningen Studentspexmästerskapen
        </div>
        <div class="text-center text-[#888]">
          Org.nr 802540-3950
        </div>
      </div>
    </div>
  </footer>
</template>
