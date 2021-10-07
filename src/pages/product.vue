<template>
  <div class="relative bg-white">
    <!--    Stripes-->
    <div class="absolute -top-1 bg-white w-full">
      <img class="w-full" src="/public/assets/images/stripes.svg" alt="" />
    </div>

    <!--    Hero-->
    <div class="relative z-10">
      <div class="pt-16 text-center mx-auto max-w-7xl px-4 sm:pt-38 sm:pb-18">
        <h1 class="text-4xl tracking-tight font-bold text-voxo-gray-header sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Simply Communicate.</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-voxo-gray sm:text-xl md:mt-6 md:text-2xl md:max-w-xl">
          Learn more about our awesome product and how we can help your business communicate.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-9">
          <div class="rounded-md shadow">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-lg text-white bg-voxo-red md:py-3 md:text-lg">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Alternating Feature Sections -->
    <div class="relative pt-16 pb-0 lg:pb-32 overflow-hidden">
      <div id="call-center" class="relative">
        <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
          <img src="/public/assets/images/icons/icon-call-center.svg" alt="Call Center" />
        </div>
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 py-4">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <h1 class="text-3xl font-bold text-voxo-gray-header tracking-tight md:text-5xl">
                Call Center
              </h1>
              <p class="py-8">
                Meet the ultimate Call Center where it’s all about the analytics. Get real-time data to make key business
                decisions and find out exactly how your outbound and inbound call flow is working for your organization.
                Set up your call flow with multiple queue strategies to engage your customer base more efficiently. See
                critical performance metrics and trends at a glance. No more busy screens, just simple, clear data that
                displays the behavior you’re looking for at a glance
              </p>
              <div class="pt-4">
                <h2 class="text-2xl">
                  Call Center Features
                </h2>
                <div class="py-6">
                  <dl class="space-y-2 sm:space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
                    <div v-for="feature in callCenterFeatures" :key="feature.name" class="relative">
                      <dt>
                        <div class="absolute">
                          <img :src="feature.iconPath" alt="Real time analytics" />
                        </div>
                        <p class="ml-8 leading-6 text-base">
                          {{ feature.name }}
                        </p>
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img class="bg-voxo-gray-light p-4 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/public/assets/images/omnia-preview-light.svg" alt="OMNIA preview" />
            </div>
          </div>
        </div>
      </div>
      <div id="mobility" class="mt-6 mb-0 lg:my-38">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div class="lg:mx-auto lg:max-w-7xl lg:pr-8">
                <img src="/public/assets/images/icons/icon-mobility.svg" alt="Call Center" />
              </div>
              <div class="mt-6">
                <h1 class="text-3xl font-bold text-voxo-gray-header tracking-tight md:text-5xl">
                  Mobility
                </h1>
                <p class="mt-4">
                  Designed with the end-user in mind, VOXO’s mobile app gives every user the on-the-go functionality that’s
                  needed in today’s business environment. Make and receive calls from your desk extension, text, and even
                  listen to voicemail all from the phone in your pocket.
                </p>
                <p class="mt-4">
                  VOXO’s integration with your phone’s native dialer will help you easily see whether a call is for business
                  or personal. The best part? Our mobile app is included with every seat purchase at no additional cost,
                  making communicating… simple.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div class="pr-0 lg:pr-6 lg:px-0 lg:relative lg:h-full">
              <img class="w-3/4 mx-auto lg:absolute lg:right-0 lg:w-auto lg:max-w-none" src="/public/assets/images/mobility-image.svg" alt="VOXO Mobility" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  PBX Features-->
  <div id="pbx-features" class="relative bg-opacity-0 pb-10 lg:pb-24">
    <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
      <img class="mx-auto" src="/public/assets/images/icons/icon-pbx.svg" alt="PBX Features" />
      <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl text-center pt-4 pb-6">
        PBX Features
      </h1>
      <p class="max-w-4xl mx-auto text-center">
        Not all VoIP Providers are alike. We have built our PBX from the ground up, and are constantly innovating to reshape
        the telecom industry. With our fully featured communications platform you’ll be able to manage your organization’s call
        flow and communicating will be easy, reliable, and save you a ton of money. Built in redundancy, simple billing, and
        our top-tier support will allow you to breathe easy knowing that your company can effectively and easily communicate
        in and out of the office when it matters most.
      </p>
    </div>
    <div class="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
      <div class="w-full flex flex-wrap justify-center gap-5 mt-10">
        <div
          v-for="feature in pbxFeatures"
          :key="feature.name"
          class="border rounded-2xl border-voxo-gray-border text-center border-opacity-40 pt-12 pb-4 px-7 no-flex w-72 flex-none"
        >
          <div class="h-12 flex align-center justify-center">
            <img class="mx-auto" :src="feature.iconPath" :alt="feature.name" />
          </div>
          <h2 class="text-xl pt-7 pb-1">
            {{ feature.name }}
          </h2>
          <div class="text-sm text-voxo-gray">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  Desktop App-->
  <div id="desktop-app" class="relative mt-10">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex lg:space-x-8 sm:justify-between items-center flex-wrap">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-5/12">
        <div>
          <img src="/public/assets/images/icons/icon-desktop-app.svg" alt="Desktop App" />
        </div>
        <div>
          <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl">
            Desktop App
          </h1>
          <p class="py-8">
            Don’t want to clutter the desk? There’s no need for a physical phone then. Make your calls straight from your
            computer without trading call quality. Our Omnia desktop app is easy to use, simple to navigate, and can be
            accessed anywhere there’s an internet connection. We call it Omnia, because it contains everything you need
            and more to communicate with your team and clients.
          </p>
        </div>
      </div>
      <div class="w-3/4 mx-auto lg:mt-0 lg:flex-1">
        <img class="mx-auto lg:left-0 lg:w-auto lg:-mr-12" src="/public/assets/images/desktop-app.png" alt="OMNIA preview" />
      </div>
    </div>
  </div>

  <!--  SIP Trunks-->
  <div id="sip-trunks" class="bg-gradient-to-b from-voxo-gray-light to-transparent -mt-18 h-48"></div>
  <div class="bg-white">
    <div class="px-4 lg:mx-auto lg:max-w-7xl lg:px-8 pt-12 pb-24">
      <img class="mx-auto" src="/public/assets/images/icons/icon-trunks.svg" alt="PBX Features" />
      <h1 class="text-3xl font-bold text-voxo-gray-header tracking-tight md:text-5xl text-center pt-4 pb-6">
        SIP Trunks
      </h1>
      <p class="max-w-4xl mx-auto text-center">
        Some of our clients have recently invested in an On-Prem PBX, but still want the support, infrastructure, and personal
        relationship VOXO brings to the telecom experience. No worries! We provide low cost SIP trunks that provide dial tone
        to your On-Prem PBX, installed without hassle. You can still manage your numbers and basic call flow from our portal too!
      </p>
      <img class="mx-auto pt-24" src="/public/assets/images/sip_trunk_image.png" alt="SIP Trunks" />
    </div>
  </div>

  <!--  Custom Development-->
  <div id="custom-development" class="bg-gradient-to-l from-voxo-gray-grad-dark to-transparent transform skew-y-3">
    <div class="transform -skew-y-3 py-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex lg:space-x-8 sm:justify-between items-center flex-wrap transform">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-5/12">
          <div>
            <img src="/public/assets/images/icons/icon-custom-dev.svg" alt="Desktop App" />
          </div>
          <div>
            <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl">
              Custom Development
            </h1>
            <p class="py-8">
              Need more customization? Does that plug-and-play integration not give you exactly what you need to make your
              system work for your business? Our entire platform was built in house and with enterprise customers in mind.
              This means that you’re talking to the source when needing a custom solution developed. There’s no in between.
              VOXO is not a reseller. Part of our mission to “Fix Telecom” means that we want to innovate alongside you. Our
              team of developers are experienced and ready to listen and dream with you to make the perfect solution for
              your communication needs.
            </p>
          </div>
        </div>
        <div class="w-3/4 mx-auto lg:mt-0 lg:flex-1 flex justify-center items-center">
          <img class="mx-auto lg:left-0 lg:w-auto lg:-mr-12" src="/public/assets/images/custom_dev.png" alt="Custom Development" />
        </div>
      </div>
    </div>
  </div>

  <!--  Our Infrastructure-->
  <div id="our-infrastructure" class="mt-12">
    <div class="px-4 lg:mx-auto lg:max-w-7xl lg:px-8 pt-12 pb-24">
      <img class="mx-auto" src="/public/assets/images/icons/icon-infrastructure.svg" alt="PBX Features" />
      <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl text-center pt-4 pb-6">
        Our Infrastructure
      </h1>
      <p class="max-w-4xl mx-auto text-center">
        Some of our clients have recently invested in an On-Prem PBX, but still want the support, infrastructure, and personal
        relationship VOXO brings to the telecom experience. No worries! We provide low cost SIP trunks that provide dial tone
        to your On-Prem PBX, installed without hassle. You can still manage your numbers and basic call flow from our portal too!
      </p>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-9">
        <div class="rounded-md shadow">
          <a href="https://github.com/voxoco/k8s" class="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-lg text-white bg-voxo-gray-dark md:py-3 md:text-lg">
            <span class="pr-2"><svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></span><span> GitHub Demo</span>
          </a>
        </div>
      </div>
      <iframe height="1000" class="mx-auto pt-12 w-full" src="https://isoflow.io/project/cknuw4pyddjjq0738cnikqcbv"></iframe>
    </div>
  </div>
</template>

<script>

const callCenterFeatures = [
  {
    name: 'Real-time Analytics',
    iconPath: '/assets/images/icons/icon-bolt.svg',
  },
  {
    name: 'Time Management',
    iconPath: '/assets/images/icons/icon-check-green.svg',
  },
  {
    name: 'Simple and Attractive UI',
    iconPath: '/assets/images/icons/icon-ui.svg',
  },
  {
    name: 'Hourly Reporting',
    iconPath: '/assets/images/icons/icon-clock.svg',
  },
  {
    name: 'Advanced Call Routing',
    iconPath: '/assets/images/icons/icon-routing.svg',
  },
  {
    name: 'Like, a lot more...',
    iconPath: '/assets/images/icons/icon-plus.svg',
  },
]
const pbxFeatures = [
  {
    name: 'Desktop App Extension',
    iconPath: '/assets/images/icons/icon-desktop.svg',
    description: 'A phone without the phone',
  },
  {
    name: 'Virtual Receptionist',
    iconPath: '/assets/images/icons/icon-ivr.svg',
    description: 'Thanks for calling! Press “1” for sales, Press “2” for support…',
  },
  {
    name: 'Call Groups',
    iconPath: '/assets/images/icons/icon-call-groups.svg',
    description: 'Let me see if I can reach someone, or I can send this call to everyone!',
  },
  {
    name: 'Voicemail to Email',
    iconPath: '/assets/images/icons/icon-email.svg',
    description: 'Delete, delete, delete, oh wait, I need that one.',
  },
  {
    name: 'Conference Bridges',
    iconPath: '/assets/images/icons/icon-conf-bridge.svg',
    description: 'One number to rule... I mean, connect, them all.',
  },
  {
    name: 'Feature Codes',
    iconPath: '/assets/images/icons/icon-features.svg',
    description: 'Dial *#47 to turn on the lights.',
  },
  {
    name: 'Scalable Billing',
    iconPath: '/assets/images/icons/icon-billing.svg',
    description: 'I need 60 phones in June, but only 55 in July.',
  },
  {
    name: 'Blacklisting',
    iconPath: '/assets/images/icons/icon-blacklist.svg',
    description: 'Mr. Reddington, I no longer want to receive your calls.',
  },
  {
    name: 'Number Portability',
    iconPath: '/assets/images/icons/icon-porting.svg',
    description: 'That’s right you can port your own number. Who else does that?',
  },
  {
    name: 'Personal Support',
    iconPath: '/assets/images/icons/icon-voxo.svg',
    description: 'You talk to a real live person, that works for VOXO, but they can only communicate in gifs... Just kidding.',
  },
  {
    name: 'Work Extension Texting',
    iconPath: '/assets/images/icons/icon-texting.svg',
    description: 'Hey I just met you, and this is crazy, but can I text you from my work number maybe?',
  },
]

export default {
  setup() {
    return {
      callCenterFeatures,
      pbxFeatures,
    }
  },
}

</script>
