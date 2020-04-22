<template>
  <div :class="darkmode?  'containerDark' : 'container'">
    <div class="aboutuscontainer">
      <div class="versioncontent">
        <div class="numberflex">1.1</div>
        <div class="versionflex">Version</div>
      </div>
      <br />
      <div class="aboutcontent">
        <div class="aboutheader">
          <div class="headerflex1">{{$t('aboutusPage.heading')}}</div>
          <div class="headerflex2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background:new 0 0 100 100; width:41.39px; height:41.39px;"
              xml:space="preserve"
              fill="#F44336"
            >
              <rect x="-25" y="44" width="4" height="9" />
              <g>
                <g>
                  <circle cx="50" cy="50" r="30" />
                </g>
                <rect
                  x="40"
                  y="15"
                  transform="matrix(0.9502 -0.3115 0.3115 0.9502 -3.9846 14.0532)"
                  width="4"
                  height="8.999"
                />
                <rect
                  x="24"
                  y="23"
                  transform="matrix(0.8327 -0.5537 0.5537 0.8327 -10.8778 18.9984)"
                  width="4"
                  height="9"
                />
                <rect
                  x="16.5"
                  y="36.5"
                  transform="matrix(0.1746 -0.9846 0.9846 0.1746 -25.1001 52.0585)"
                  width="4"
                  height="9"
                />
                <rect
                  x="16"
                  y="54"
                  transform="matrix(0.3612 0.9325 -0.9325 0.3612 66.0505 20.587)"
                  width="4"
                  height="8.999"
                />
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M84.017,54.262c0,0-0.09,0.581-0.224,1.454c-0.08,0.434-0.107,0.954-0.252,1.486        c-0.139,0.534-0.287,1.104-0.435,1.673c-0.163,0.564-0.25,1.153-0.46,1.664c-0.191,0.518-0.369,1.001-0.522,1.415        c-0.3,0.83-0.499,1.383-0.499,1.383l10.476,4.425c0,0,0.272-0.736,0.682-1.841c0.201-0.554,0.436-1.199,0.687-1.891        c0.268-0.687,0.41-1.464,0.624-2.219c0.193-0.761,0.388-1.521,0.569-2.234c0.184-0.713,0.241-1.4,0.346-1.979        c0.177-1.164,0.295-1.939,0.295-1.939L84.017,54.262z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M86.865,65.551c-1.443-0.615-2.551-1.728-3.211-2.925        c-0.662-1.208-0.812-2.479-0.548-3.752c0.161-0.629,0.472-1.188,0.899-1.681c0.406-0.497,0.861-0.941,1.446-1.298        c1.149-0.711,2.652-1.123,4.21-0.935c1.556,0.188,2.872,0.99,3.721,2.244c0.415,0.622,0.754,1.359,0.876,2.145        c0.101,0.78,0.051,1.621-0.166,2.461c-0.379,1.701-1.578,2.977-2.913,3.64C89.837,66.121,88.307,66.164,86.865,65.551z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M77.325,70.683c0,0-0.353,0.472-0.882,1.18c-0.595,0.655-1.388,1.528-2.181,2.4        c-0.872,0.793-1.745,1.586-2.399,2.181c-0.709,0.529-1.181,0.882-1.181,0.882l6.87,9.062c0,0,0.625-0.474,1.562-1.185        c0.87-0.79,2.03-1.845,3.19-2.899c1.054-1.159,2.108-2.319,2.899-3.189c0.71-0.937,1.184-1.562,1.184-1.562L77.325,70.683z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M74.119,81.858c-0.944-1.253-1.327-2.743-1.267-4.068        c0.014-1.397,0.441-2.664,1.411-3.528c0.863-0.969,2.13-1.396,3.527-1.41c1.324-0.061,2.814,0.323,4.067,1.268        c1.251,0.943,2.005,2.311,2.138,3.842c0.073,1.468-0.518,3.063-1.691,4.342c-1.277,1.175-2.874,1.766-4.343,1.693        C76.431,83.862,75.062,83.109,74.119,81.858z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M63.337,81.625c0,0-0.553,0.199-1.383,0.499c-0.414,0.153-0.897,0.331-1.415,0.522        c-0.511,0.21-1.1,0.297-1.664,0.46c-0.569,0.147-1.139,0.296-1.673,0.435c-0.532,0.145-1.053,0.172-1.486,0.252        c-0.872,0.134-1.454,0.224-1.454,0.224l1.397,11.286c0,0,0.775-0.118,1.939-0.295c0.578-0.104,1.266-0.162,1.979-0.346        c0.714-0.182,1.474-0.376,2.234-0.569c0.755-0.214,1.532-0.356,2.219-0.624c0.691-0.251,1.337-0.485,1.891-0.688        c1.104-0.408,1.841-0.681,1.841-0.681L63.337,81.625z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M54.961,89.662c-0.188-1.558,0.225-3.061,0.937-4.21        c0.356-0.585,0.801-1.04,1.298-1.446c0.492-0.429,1.052-0.739,1.681-0.9c1.272-0.265,2.544-0.113,3.751,0.548        c1.196,0.661,2.31,1.769,2.924,3.212c0.613,1.441,0.571,2.972-0.1,4.313c-0.662,1.335-1.937,2.534-3.638,2.913        c-0.84,0.218-1.681,0.267-2.461,0.166c-0.785-0.121-1.523-0.46-2.146-0.875C55.952,92.534,55.148,91.218,54.961,89.662z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M45.739,84.017c0,0-0.582-0.09-1.455-0.224c-0.434-0.08-0.954-0.107-1.486-0.252        c-0.534-0.139-1.103-0.287-1.672-0.435c-0.564-0.163-1.153-0.25-1.665-0.46c-0.517-0.191-1-0.369-1.414-0.522        c-0.83-0.3-1.383-0.499-1.383-0.499l-4.424,10.476c0,0,0.736,0.272,1.84,0.681c0.553,0.201,1.199,0.437,1.891,0.688        c0.687,0.268,1.464,0.41,2.218,0.624c0.761,0.193,1.521,0.388,2.235,0.569c0.713,0.184,1.4,0.241,1.979,0.346        c1.163,0.177,1.939,0.295,1.939,0.295L45.739,84.017z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M34.45,86.865c0.614-1.443,1.728-2.551,2.924-3.211        c1.208-0.662,2.48-0.813,3.752-0.548c0.629,0.161,1.188,0.472,1.681,0.899c0.497,0.406,0.941,0.861,1.297,1.446        c0.711,1.149,1.124,2.652,0.936,4.21c-0.188,1.556-0.991,2.872-2.244,3.721c-0.623,0.415-1.36,0.754-2.145,0.876        c-0.78,0.101-1.621,0.051-2.461-0.166c-1.701-0.379-2.976-1.579-3.64-2.913C33.879,89.837,33.836,88.307,34.45,86.865z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M29.318,77.325c0,0-0.472-0.353-1.181-0.882c-0.654-0.595-1.527-1.388-2.4-2.181        c-0.793-0.873-1.586-1.745-2.181-2.4c-0.529-0.708-0.881-1.18-0.881-1.18l-9.062,6.87c0,0,0.474,0.625,1.184,1.562        c0.791,0.87,1.845,2.03,2.899,3.189c1.16,1.055,2.32,2.109,3.19,2.899c0.937,0.711,1.562,1.184,1.562,1.184L29.318,77.325z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M18.142,74.119c1.252-0.944,2.743-1.327,4.068-1.267        c1.397,0.014,2.664,0.441,3.528,1.411c0.97,0.863,1.397,2.13,1.411,3.527c0.061,1.324-0.324,2.814-1.268,4.067        c-0.943,1.251-2.311,2.005-3.841,2.138c-1.468,0.073-3.064-0.518-4.343-1.691c-1.174-1.277-1.765-2.874-1.692-4.343        C16.138,76.431,16.891,75.062,18.142,74.119z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M18.375,63.337c0,0-0.2-0.553-0.499-1.384c-0.153-0.413-0.331-0.896-0.522-1.414        c-0.211-0.511-0.297-1.1-0.46-1.664c-0.148-0.569-0.296-1.139-0.435-1.673c-0.145-0.532-0.171-1.053-0.252-1.486        c-0.134-0.873-0.224-1.455-0.224-1.455L4.698,55.659c0,0,0.118,0.775,0.294,1.939c0.104,0.578,0.163,1.266,0.346,1.979        c0.182,0.713,0.375,1.474,0.57,2.234c0.214,0.755,0.356,1.532,0.623,2.219c0.251,0.691,0.486,1.337,0.688,1.891        c0.409,1.104,0.681,1.841,0.681,1.841L18.375,63.337z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M10.338,54.961c1.557-0.188,3.06,0.225,4.209,0.936        c0.585,0.357,1.041,0.802,1.447,1.299c0.428,0.492,0.739,1.052,0.899,1.681c0.265,1.272,0.114,2.544-0.548,3.751        c-0.66,1.196-1.769,2.309-3.211,2.923c-1.441,0.614-2.971,0.572-4.314-0.099c-1.334-0.662-2.534-1.937-2.913-3.638        c-0.217-0.84-0.266-1.681-0.166-2.461c0.122-0.785,0.46-1.524,0.875-2.146C7.466,55.952,8.783,55.148,10.338,54.961z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M15.983,45.739c0,0,0.089-0.582,0.224-1.455c0.081-0.434,0.107-0.954,0.252-1.486        c0.139-0.534,0.287-1.103,0.435-1.672c0.163-0.564,0.249-1.153,0.46-1.665c0.191-0.517,0.369-1,0.522-1.414        c0.299-0.83,0.499-1.383,0.499-1.383L7.899,32.238c0,0-0.272,0.736-0.681,1.841c-0.201,0.553-0.436,1.199-0.688,1.891        c-0.267,0.687-0.409,1.464-0.623,2.218c-0.194,0.761-0.388,1.521-0.57,2.235c-0.183,0.712-0.241,1.4-0.346,1.979        c-0.177,1.164-0.294,1.939-0.294,1.939L15.983,45.739z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M13.135,34.45c1.443,0.614,2.551,1.728,3.211,2.924        c0.662,1.208,0.813,2.48,0.548,3.752c-0.161,0.629-0.472,1.188-0.899,1.681c-0.406,0.497-0.862,0.941-1.446,1.297        c-1.149,0.711-2.653,1.124-4.209,0.936c-1.556-0.188-2.873-0.991-3.721-2.244c-0.415-0.623-0.754-1.36-0.876-2.146        c-0.1-0.78-0.051-1.621,0.166-2.46c0.379-1.701,1.579-2.976,2.913-3.64C10.164,33.879,11.693,33.836,13.135,34.45z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M22.675,29.318c0,0,0.353-0.472,0.881-1.181c0.595-0.654,1.388-1.527,2.181-2.4        c0.873-0.793,1.746-1.586,2.4-2.181c0.708-0.529,1.181-0.881,1.181-0.881l-6.871-9.062c0,0-0.625,0.474-1.562,1.184        c-0.87,0.791-2.03,1.845-3.19,2.899c-1.054,1.16-2.108,2.32-2.899,3.189c-0.71,0.937-1.184,1.562-1.184,1.562L22.675,29.318z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M25.881,18.142c0.944,1.252,1.328,2.743,1.267,4.068        c-0.014,1.397-0.442,2.664-1.411,3.528c-0.864,0.97-2.13,1.397-3.527,1.411c-1.324,0.061-2.815-0.324-4.067-1.268        c-1.251-0.943-2.005-2.311-2.138-3.841c-0.074-1.469,0.518-3.064,1.691-4.343c1.278-1.174,2.875-1.765,4.344-1.692        C23.57,16.138,24.938,16.891,25.881,18.142z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M36.663,18.375c0,0,0.553-0.2,1.383-0.499c0.414-0.153,0.897-0.331,1.414-0.522        c0.512-0.211,1.1-0.297,1.665-0.46c0.569-0.148,1.139-0.296,1.672-0.435c0.533-0.145,1.053-0.171,1.486-0.252        c0.873-0.134,1.455-0.224,1.455-0.224L44.341,4.698c0,0-0.776,0.118-1.939,0.294c-0.579,0.104-1.266,0.163-1.979,0.346        c-0.713,0.182-1.474,0.375-2.235,0.57c-0.754,0.214-1.532,0.356-2.218,0.623c-0.691,0.251-1.337,0.486-1.891,0.688        c-1.104,0.409-1.84,0.681-1.84,0.681L36.663,18.375z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M45.04,10.338c0.188,1.557-0.225,3.06-0.937,4.209        c-0.356,0.585-0.801,1.041-1.298,1.447c-0.493,0.428-1.052,0.739-1.681,0.899c-1.272,0.265-2.544,0.114-3.751-0.548        c-1.196-0.66-2.309-1.769-2.923-3.211c-0.614-1.442-0.571-2.971,0.099-4.314c0.663-1.334,1.938-2.534,3.639-2.913        c0.84-0.217,1.681-0.266,2.461-0.166c0.785,0.122,1.523,0.46,2.146,0.875C44.048,7.466,44.852,8.783,45.04,10.338z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M54.262,15.983c0,0,0.582,0.089,1.454,0.224c0.434,0.081,0.954,0.107,1.486,0.252        c0.534,0.139,1.104,0.287,1.673,0.435c0.564,0.163,1.153,0.249,1.664,0.46c0.518,0.191,1.001,0.369,1.415,0.522        c0.83,0.299,1.383,0.499,1.383,0.499l4.425-10.476c0,0-0.736-0.272-1.841-0.681c-0.554-0.201-1.199-0.436-1.891-0.688        c-0.687-0.267-1.464-0.409-2.219-0.623c-0.761-0.194-1.521-0.388-2.234-0.57c-0.713-0.183-1.4-0.241-1.979-0.346        c-1.164-0.177-1.939-0.294-1.939-0.294L54.262,15.983z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M65.551,13.135c-0.614,1.443-1.728,2.551-2.925,3.211        c-1.207,0.662-2.479,0.813-3.752,0.548c-0.629-0.161-1.188-0.472-1.681-0.899c-0.496-0.406-0.941-0.862-1.298-1.446        c-0.711-1.149-1.123-2.653-0.935-4.209c0.188-1.556,0.99-2.873,2.244-3.721c0.622-0.415,1.359-0.754,2.145-0.876        c0.78-0.1,1.621-0.051,2.461,0.166c1.701,0.379,2.977,1.579,3.64,2.913C66.121,10.163,66.164,11.693,65.551,13.135z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M70.683,22.675c0,0,0.472,0.353,1.181,0.881c0.654,0.595,1.527,1.388,2.399,2.181        c0.793,0.873,1.586,1.745,2.181,2.4c0.529,0.708,0.882,1.181,0.882,1.181l9.062-6.871c0,0-0.474-0.625-1.184-1.562        c-0.791-0.87-1.846-2.03-2.899-3.189c-1.16-1.054-2.32-2.109-3.19-2.899c-0.937-0.71-1.562-1.184-1.562-1.184L70.683,22.675z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M81.858,25.881c-1.253,0.944-2.743,1.328-4.068,1.267        c-1.397-0.014-2.664-0.442-3.528-1.411c-0.969-0.864-1.396-2.13-1.41-3.527c-0.061-1.324,0.323-2.815,1.268-4.067        c0.943-1.251,2.311-2.004,3.842-2.138c1.468-0.073,3.064,0.518,4.342,1.691c1.175,1.278,1.766,2.875,1.693,4.343        C83.862,23.57,83.109,24.938,81.858,25.881z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="none"
                            d="M81.625,36.663c0,0,0.199,0.554,0.499,1.384c0.153,0.414,0.331,0.897,0.522,1.414        c0.21,0.512,0.297,1.1,0.46,1.665c0.147,0.569,0.296,1.139,0.435,1.672c0.145,0.533,0.172,1.053,0.252,1.486        c0.134,0.873,0.224,1.455,0.224,1.455l11.286-1.398c0,0-0.118-0.776-0.295-1.939c-0.104-0.579-0.162-1.267-0.346-1.979        c-0.182-0.713-0.376-1.474-0.569-2.235c-0.214-0.754-0.356-1.532-0.624-2.218c-0.251-0.692-0.485-1.337-0.687-1.891        c-0.409-1.104-0.682-1.841-0.682-1.841L81.625,36.663z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#F44336"
                            d="M89.662,45.04c-1.558,0.188-3.061-0.225-4.21-0.937        c-0.585-0.356-1.04-0.801-1.446-1.298c-0.429-0.493-0.739-1.051-0.9-1.681c-0.265-1.272-0.113-2.544,0.548-3.751        c0.661-1.197,1.769-2.309,3.212-2.923c1.441-0.614,2.972-0.571,4.313,0.099c1.335,0.663,2.534,1.938,2.913,3.639        c0.218,0.84,0.267,1.681,0.166,2.461c-0.121,0.785-0.46,1.523-0.875,2.146C92.534,44.048,91.218,44.851,89.662,45.04z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <rect
                  x="39"
                  y="77"
                  transform="matrix(0.9813 0.1924 -0.1924 0.9813 16.445 -6.3653)"
                  width="4"
                  height="9"
                />
                <rect
                  x="25"
                  y="68"
                  transform="matrix(0.765 0.644 -0.644 0.765 53.0372 -0.3513)"
                  width="4"
                  height="9"
                />
                <rect
                  x="57"
                  y="77"
                  transform="matrix(0.9707 -0.2405 0.2405 0.9707 -17.8669 16.579)"
                  width="4"
                  height="8.999"
                />
                <rect
                  x="72"
                  y="67"
                  transform="matrix(0.8491 -0.5283 0.5283 0.8491 -26.6034 49.8849)"
                  width="4"
                  height="9"
                />
                <rect
                  x="56"
                  y="14"
                  transform="matrix(0.9354 0.3535 -0.3535 0.9354 10.2836 -19.3073)"
                  width="4"
                  height="9"
                />
                <rect
                  x="80"
                  y="53"
                  transform="matrix(0.4122 -0.9111 0.9111 0.4122 -4.1884 108.508)"
                  width="3.999"
                  height="9"
                />
                <rect
                  x="80"
                  y="38"
                  transform="matrix(0.3738 0.9275 -0.9275 0.3738 90.7642 -49.4427)"
                  width="3.999"
                  height="9"
                />
                <rect
                  x="71"
                  y="22"
                  transform="matrix(0.7098 0.7044 -0.7044 0.7098 39.8525 -43.7317)"
                  width="4"
                  height="9"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="aboutbody">
          <p align="justify" style="line-height:22px;">{{$t('aboutusPage.content')}}</p>
        </div>
      </div>
      <br />
      <div class="apisourcecontainer">
        <div :class="darkmode? 'apicontainer1Dark' : 'apicontainer1'">
          <div class="box1">Statistic API</div>
          <div class="box2">
            <a href="https://rapidapi.com/" style="text-decoration: none;">https://rapidapi.com/</a>
          </div>
        </div>
        <div :class="darkmode? 'apicontainer2Dark' : 'apicontainer2'">
          <div class="box1">News API</div>
          <div class="box2">
            Contact via
            <a
              href="https://www.facebook.com/UITStudentsUnion/"
              style="text-decoration : none; margin-left:3px"
            >UIT-SU</a>
          </div>
        </div>
      </div>
      <br />
      <!---Updateddddd--------->
      <div
        style="text-align:center; color:#757575; font-size:14px;"
      >Proudly Collaborated with Good Hope</div>
      <br />

      <div :class="darkmode? 'GoodhopecontainerDark' : 'Goodhopecontainer'">
        <div class="GHflex1">
          <div class="GHheading">Good Hope</div>
          <div class="GHlogo">
            <img src="../assets/goodhope.jpg" width="55" height="55" />
          </div>
        </div>
        <div class="GHflex2">
          <p>
              {{$t('goodHope.para1')}}
            <br />
            <br />
            {{$t('goodHope.para2')}}
          </p>
        </div>
      </div>

      <br />
      <div class="bar"></div>
      <br />

      <div style="color:#757575;">Developed by UITSU | Good Hope</div>

      <div class="profilecontainer">
        <div class="image1">
          <img src="../assets/uitsu.jpg" width="65" height="65" />
        </div>
        <div class="image2">
          <img src="../assets/goodhope.jpg" width="65" height="65" />
        </div>
      </div>

      <div style="color:#757575;">Copyright 2020 Covid 19 | Myanamr</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  methods: {
    chnageDark(value) {
      this.darkmode = value;
    },
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "App အကြောင်း";
      }
      if (name == "en") {
        this.$root.$data.title = "About Us";
      }
    }
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);

    this.$darkModeBus.$on("dark-mode", this.chnageDark);
  },
  mounted() {
    if (this.lang == "mm") {
      this.$root.$data.title = "App အကြောင်း";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "About Us";
    }
  }
};
</script>

<style scoped>
.aboutuscontainer {
  text-align: center;
  margin-top: 80px;
  justify-content: center;
  width: 95%;
  align-items: center;
  height: auto;
}

.versioncontent {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
}
.numberflex {
  display: flex;
  flex: 1;
  font-size: 24px;
  align-items: flex-end;
  justify-content: center;
}
.versionflex {
  display: flex;
  flex: 1;
  font-size: 24px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15px;
}
.aboutcontent {
  height: 280px;
  display: flex;
  flex-direction: column;
}
.aboutheader {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  padding: 0;
  margin: 0;
  line-height: 35px;
}
.headerflex1 {
  display: flex;
  flex: 4;
  text-align: left;
  align-items: center;
  font-weight: bold;
  justify-content: flex-start;
}
.headerflex2 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

.aboutbody {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.apisourcecontainer {
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
}
.apicontainer1 {
  display: flex;
  height: 80px;
  background-color: #eee;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 15px;
}
.apicontainer1Dark {
  display: flex;
  height: 80px;
  background-color: #212121;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 15px;
}
.box1 {
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-left: 15px;
}
.box2 {
  display: flex;
  flex: 1;
  align-items: flex-start;
  margin-left: 15px;
}
.apicontainer2 {
  flex-direction: column;
  display: flex;
  height: 80px;
  background-color: #eee;
  border-radius: 15px;
}
.apicontainer2Dark {
  flex-direction: column;
  display: flex;
  height: 80px;
  background-color: #212121;
  border-radius: 15px;
}
.bar {
  width: 25px;
  height: 5px;
  display: flex;
  border-radius: 50px;
  background-color: #bdbdbd;
  margin: 0 auto;
}
.profilecontainer {
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.profileflex1 {
  display: flex;
  flex: 1;
}
.flexbox1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile {
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
}
.name {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.flexbox2 {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flexbox3 {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profileflex2 {
  display: flex;
  flex: 1;
}
.profileflex3 {
  display: flex;
  flex: 1;
}
img {
  width: 55px;
  height: 55px;
  display: inline-block;
  border-radius: 100px;
  width: 55px;
  height: 55px;
}

/*updatedddddddddddd*/

.Goodhopecontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
  height: 300px;
  border-radius: 15px;
  align-items: center;
}
.GoodhopecontainerDark {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #212121;
  height: 300px;
  border-radius: 15px;
  align-items: center;
}
.GHflex1 {
  display: flex;
  flex: 2;
  width: 90%;
  margin-top: 10px;
}
.GHheading {
  display: flex;
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
}
.GHlogo {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}
.GHflex2 {
  display: flex;
  flex: 4;
  padding: 12px;
  align-items: flex-end;
  justify-content: center;
}
.image1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: -10px;
  z-index: 0.5;
}
.image1 img {
  border: 2px solid #fbbf3c;
}
.image2 {
  display: flex;
  flex: 1;
  margin-left: -10px;
  align-items: center;
  justify-content: flex-start;
  
}
</style>