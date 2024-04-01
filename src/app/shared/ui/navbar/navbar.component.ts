import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconContact } from '../icons/contact';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="border-b border-gray-500/50 mb-8">
      <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto py-6">
        <a routerLink="/" class="flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 607 135"
            fill="none"
            class="logo"
          >
            <g clip-path="url(#a)">
              <path
                d="M23.552 53.184C23.4667 53.7813 23.424 54.6347 23.424 55.744C23.424 57.024 23.5093 58.7733 23.68 60.992C23.8507 63.3813 23.936 65.1733 23.936 66.368C24.5333 65.9413 25.6853 65.3013 27.392 64.448C30.976 62.5707 33.792 60.7787 35.84 59.072C37.888 57.3653 38.912 55.4453 38.912 53.312C38.912 52.8853 38.8693 52.544 38.784 52.288C38.4427 50.4107 37.5467 48.7467 36.096 47.296C34.6453 45.8453 33.2373 44.7787 31.872 44.096C30.5067 43.328 28.2453 42.1333 25.088 40.512C24.4907 44.6933 23.9787 48.9173 23.552 53.184ZM39.04 55.488L39.424 54.848L39.04 55.488ZM39.552 53.184L39.68 53.952L39.552 53.184ZM58.24 70.336C58.9227 70.1653 59.392 70.08 59.648 70.08C61.952 70.08 63.104 72.5973 63.104 77.632C63.104 80.2773 62.8907 82.7947 62.464 85.184C62.1227 87.5733 61.952 88.896 61.952 89.152C61.3547 93.504 60.544 97.344 59.52 100.672C58.496 104 56.96 107.072 54.912 109.888C52.1813 113.557 49.4933 115.392 46.848 115.392C44.6293 115.392 42.0267 114.155 39.04 111.68L26.496 101.312L20.736 96.448C20.3093 98.3253 19.3707 100.843 17.92 104C16.5547 107.072 14.8907 109.845 12.928 112.32C10.9653 114.709 8.91733 115.904 6.784 115.904C6.272 115.904 5.67467 115.776 4.992 115.52C3.28533 114.837 2.432 112.491 2.432 108.48C2.432 104.725 3.072 100.032 4.352 94.4L4.992 90.432C5.07733 89.5787 5.376 87.4453 5.888 84.032C6.4 80.6187 6.784 77.4613 7.04 74.56C7.296 71.6587 7.424 68.9707 7.424 66.496C7.424 63.7653 7.33867 61.7173 7.168 60.352C6.82667 57.536 6.528 55.5307 6.272 54.336C5.41867 48.8747 4.992 44.6507 4.992 41.664C4.992 38.1653 5.504 35.0933 6.528 32.448C8.23467 27.9253 10.7093 24.64 13.952 22.592C17.28 20.4587 20.992 19.392 25.088 19.392C29.952 19.392 34.8587 20.672 39.808 23.232C44.7573 25.7067 48.5973 28.736 51.328 32.32C53.7173 35.392 54.912 38.9333 54.912 42.944C54.912 47.1253 53.632 51.392 51.072 55.744C48.5973 60.096 45.44 64.1493 41.6 67.904C37.8453 71.6587 33.9627 74.7307 29.952 77.12C33.28 79.5947 36.48 82.1547 39.552 84.8C43.136 87.7013 45.824 89.8347 47.616 91.2C47.616 79.68 51.1573 72.7253 58.24 70.336ZM122.719 101.952C123.999 102.379 124.639 103.147 124.639 104.256C124.639 105.621 123.828 107.115 122.207 108.736C120.415 110.528 118.111 111.424 115.295 111.424C113.93 111.424 112.778 111.253 111.839 110.912C107.316 109.461 103.22 108.736 99.551 108.736C93.151 108.736 86.623 110.784 79.967 114.88C78.8577 115.648 77.4923 116.288 75.871 116.8C74.335 117.227 72.8843 117.44 71.519 117.44C70.239 117.44 69.215 117.227 68.447 116.8C67.679 116.288 67.295 115.52 67.295 114.496C67.295 113.899 67.3803 113.387 67.551 112.96C70.0257 106.048 71.9883 99.8187 73.439 94.272C74.975 88.7253 75.999 83.0933 76.511 77.376C77.279 69.696 77.663 64.064 77.663 60.48C77.663 51.008 75.8283 43.7547 72.159 38.72C71.7323 38.208 71.519 37.5253 71.519 36.672C71.519 34.9653 72.7137 33.3867 75.103 31.936C77.4923 30.4 79.839 29.632 82.143 29.632C83.679 29.632 84.7883 29.9733 85.471 30.656C86.5803 31.0827 87.3057 31.7653 87.647 32.704C89.7803 38.336 92.7243 43.1147 96.479 47.04C100.234 50.88 104.671 52.8 109.791 52.8C110.73 52.8 112.138 52.6293 114.015 52.288C115.21 52.1173 115.978 52.032 116.319 52.032C117.77 52.032 118.836 52.3733 119.519 53.056C120.287 53.6533 120.671 54.5067 120.671 55.616C120.671 56.8107 120.159 58.0053 119.135 59.2C118.196 60.3947 116.916 61.248 115.295 61.76C111.796 62.9547 108.298 63.552 104.799 63.552C100.618 63.552 96.607 62.6987 92.767 60.992C92.5963 65.7707 92.383 69.3547 92.127 71.744L91.231 79.808C94.559 79.2107 97.887 78.6987 101.215 78.272L103.007 78.144C106.42 78.144 108.127 79.296 108.127 81.6C108.127 83.136 107.274 84.5013 105.567 85.696C103.86 86.8907 102.111 87.6587 100.319 88C97.6737 88.512 94.047 89.0667 89.439 89.664C88.5003 93.8453 87.4763 97.7707 86.367 101.44C91.999 99.392 97.7163 98.368 103.519 98.368C109.919 98.368 116.319 99.5627 122.719 101.952ZM143.643 14.016C143.814 12.3947 145.179 10.944 147.739 9.66399C150.299 8.29866 152.731 7.616 155.035 7.616C157.766 7.616 159.088 8.64 159.003 10.688C157.638 25.9627 155.376 47.04 152.219 73.92C150.171 92.2667 148.848 104.171 148.251 109.632C148.08 111.424 146.715 113.045 144.155 114.496C141.68 115.861 139.248 116.544 136.859 116.544C133.531 116.544 131.995 115.307 132.251 112.832C135.238 83.4773 139.035 50.5387 143.643 14.016ZM214.844 101.952C216.124 102.379 216.764 103.147 216.764 104.256C216.764 105.621 215.953 107.115 214.332 108.736C212.54 110.528 210.236 111.424 207.42 111.424C206.055 111.424 204.903 111.253 203.964 110.912C199.441 109.461 195.345 108.736 191.676 108.736C185.276 108.736 178.748 110.784 172.092 114.88C170.983 115.648 169.617 116.288 167.996 116.8C166.46 117.227 165.009 117.44 163.644 117.44C162.364 117.44 161.34 117.227 160.572 116.8C159.804 116.288 159.42 115.52 159.42 114.496C159.42 113.899 159.505 113.387 159.676 112.96C162.151 106.048 164.113 99.8187 165.564 94.272C167.1 88.7253 168.124 83.0933 168.636 77.376C169.404 69.696 169.788 64.064 169.788 60.48C169.788 51.008 167.953 43.7547 164.284 38.72C163.857 38.208 163.644 37.5253 163.644 36.672C163.644 34.9653 164.839 33.3867 167.228 31.936C169.617 30.4 171.964 29.632 174.268 29.632C175.804 29.632 176.913 29.9733 177.596 30.656C178.705 31.0827 179.431 31.7653 179.772 32.704C181.905 38.336 184.849 43.1147 188.604 47.04C192.359 50.88 196.796 52.8 201.916 52.8C202.855 52.8 204.263 52.6293 206.14 52.288C207.335 52.1173 208.103 52.032 208.444 52.032C209.895 52.032 210.961 52.3733 211.644 53.056C212.412 53.6533 212.796 54.5067 212.796 55.616C212.796 56.8107 212.284 58.0053 211.26 59.2C210.321 60.3947 209.041 61.248 207.42 61.76C203.921 62.9547 200.423 63.552 196.924 63.552C192.743 63.552 188.732 62.6987 184.892 60.992C184.721 65.7707 184.508 69.3547 184.252 71.744L183.356 79.808C186.684 79.2107 190.012 78.6987 193.34 78.272L195.132 78.144C198.545 78.144 200.252 79.296 200.252 81.6C200.252 83.136 199.399 84.5013 197.692 85.696C195.985 86.8907 194.236 87.6587 192.444 88C189.799 88.512 186.172 89.0667 181.564 89.664C180.625 93.8453 179.601 97.7707 178.492 101.44C184.124 99.392 189.841 98.368 195.644 98.368C202.044 98.368 208.444 99.5627 214.844 101.952ZM248.056 76.608L247.032 79.168L255.992 86.72L255.096 83.008C254.499 80.6187 253.304 75.5413 251.512 67.776L248.056 76.608ZM262.648 39.232C263.843 46.656 265.336 54.208 267.128 61.888C269.005 69.4827 271.267 78.2293 273.912 88.128C276.387 97.5147 278.008 103.744 278.776 106.816C278.861 107.072 278.904 107.456 278.904 107.968C278.904 110.016 277.752 111.808 275.448 113.344C273.144 114.795 270.755 115.52 268.28 115.52C266.232 115.52 264.653 114.965 263.544 113.856C261.069 111.211 258.467 108.693 255.736 106.304C253.005 103.915 249.421 100.971 244.984 97.472L240.76 94.016C237.176 101.696 234.403 107.371 232.44 111.04C231.843 112.32 230.264 113.515 227.704 114.624C225.229 115.648 222.925 116.16 220.792 116.16C218.403 116.16 217.208 115.392 217.208 113.856C217.208 113.429 217.336 112.917 217.592 112.32C220.152 106.005 223.181 98.752 226.68 90.56L229.368 84.032C227.235 81.8987 226.168 80.832 226.168 80.832C225.571 80.2347 225.272 79.552 225.272 78.784C225.272 77.3333 226.211 75.968 228.088 74.688C229.965 73.3227 232.056 72.4267 234.36 72C238.456 62.1867 242.296 52.2027 245.88 42.048C246.221 40.8533 247.288 39.8293 249.08 38.976C250.957 38.0373 252.92 37.44 254.968 37.184C256.419 36.7573 257.656 36.544 258.68 36.544C261.069 36.544 262.392 37.44 262.648 39.232ZM327.584 59.584C325.963 58.2187 323.147 56.4267 319.136 54.208C315.211 51.904 312.181 50.752 310.048 50.752C308.341 50.752 307.488 51.6053 307.488 53.312C307.488 53.9093 307.701 54.9333 308.128 56.384C308.725 58.3467 310.048 60.224 312.096 62.016C314.144 63.7227 316.832 65.728 320.16 68.032C322.891 69.9093 324.64 71.1893 325.408 71.872C329.163 75.1147 332.149 77.8453 334.368 80.064C336.587 82.1973 338.592 84.7573 340.384 87.744C342.261 90.6453 343.2 93.632 343.2 96.704C343.2 98.752 342.688 100.885 341.664 103.104C339.701 107.115 336.459 110.187 331.936 112.32C327.499 114.453 322.763 115.52 317.728 115.52C316.021 115.52 314.315 115.392 312.608 115.136C301.003 113.173 290.293 105.451 280.48 91.968C279.968 91.2 279.712 90.432 279.712 89.664C279.712 87.7867 280.949 86.08 283.424 84.544C285.984 82.9227 288.501 82.112 290.976 82.112C292.853 82.112 294.219 82.6667 295.072 83.776C300.363 90.944 305.568 96.192 310.688 99.52C315.381 102.592 319.349 104.128 322.592 104.128C325.237 104.128 326.56 102.976 326.56 100.672C326.56 99.0507 325.92 97.0453 324.64 94.656C323.36 92.352 321.696 90.176 319.648 88.128C317.6 86.08 314.997 83.7333 311.84 81.088L308.384 78.144C308.043 77.8027 306.464 76.5653 303.648 74.432C301.344 72.7253 299.381 71.1467 297.76 69.696C296.139 68.2453 294.773 66.6667 293.664 64.96C292.213 62.656 291.488 60.2667 291.488 57.792C291.488 53.952 293.109 50.4533 296.352 47.296C299.68 44.0533 303.477 41.8347 307.744 40.64C310.475 39.872 313.077 39.488 315.552 39.488C320.16 39.488 324.597 40.5547 328.864 42.688C333.216 44.8213 337.611 47.7653 342.048 51.52C342.816 52.1173 343.2 52.8427 343.2 53.696C343.2 55.3173 341.877 56.896 339.232 58.432C336.587 59.968 333.984 60.736 331.424 60.736C329.717 60.736 328.437 60.352 327.584 59.584ZM400.719 101.952C401.999 102.379 402.639 103.147 402.639 104.256C402.639 105.621 401.828 107.115 400.207 108.736C398.415 110.528 396.111 111.424 393.295 111.424C391.93 111.424 390.778 111.253 389.839 110.912C385.316 109.461 381.22 108.736 377.551 108.736C371.151 108.736 364.623 110.784 357.967 114.88C356.858 115.648 355.492 116.288 353.871 116.8C352.335 117.227 350.884 117.44 349.519 117.44C348.239 117.44 347.215 117.227 346.447 116.8C345.679 116.288 345.295 115.52 345.295 114.496C345.295 113.899 345.38 113.387 345.551 112.96C348.026 106.048 349.988 99.8187 351.439 94.272C352.975 88.7253 353.999 83.0933 354.511 77.376C355.279 69.696 355.663 64.064 355.663 60.48C355.663 51.008 353.828 43.7547 350.159 38.72C349.732 38.208 349.519 37.5253 349.519 36.672C349.519 34.9653 350.714 33.3867 353.103 31.936C355.492 30.4 357.839 29.632 360.143 29.632C361.679 29.632 362.788 29.9733 363.471 30.656C364.58 31.0827 365.306 31.7653 365.647 32.704C367.78 38.336 370.724 43.1147 374.479 47.04C378.234 50.88 382.671 52.8 387.791 52.8C388.73 52.8 390.138 52.6293 392.015 52.288C393.21 52.1173 393.978 52.032 394.319 52.032C395.77 52.032 396.836 52.3733 397.519 53.056C398.287 53.6533 398.671 54.5067 398.671 55.616C398.671 56.8107 398.159 58.0053 397.135 59.2C396.196 60.3947 394.916 61.248 393.295 61.76C389.796 62.9547 386.298 63.552 382.799 63.552C378.618 63.552 374.607 62.6987 370.767 60.992C370.596 65.7707 370.383 69.3547 370.127 71.744L369.231 79.808C372.559 79.2107 375.887 78.6987 379.215 78.272L381.007 78.144C384.42 78.144 386.127 79.296 386.127 81.6C386.127 83.136 385.274 84.5013 383.567 85.696C381.86 86.8907 380.111 87.6587 378.319 88C375.674 88.512 372.047 89.0667 367.439 89.664C366.5 93.8453 365.476 97.7707 364.367 101.44C369.999 99.392 375.716 98.368 381.519 98.368C387.919 98.368 394.319 99.5627 400.719 101.952Z"
                fill="url(#b)"
              />
              <rect x="405" width="202" height="135" rx="20" fill="url(#b)" />
              <path
                d="M481.08 56.768C482.36 56.768 483.384 57.2373 484.152 58.176C485.005 59.1147 485.432 60.4373 485.432 62.144C485.432 62.9973 485.261 64.1067 484.92 65.472C484.493 67.52 483.683 69.44 482.488 71.232C481.293 72.9387 479.885 74.304 478.264 75.328C477.24 75.9253 476.216 76.352 475.192 76.608C474.168 76.7787 472.888 76.9493 471.352 77.12L470.456 77.248H470.072L470.456 86.976C471.139 86.8053 471.608 86.72 471.864 86.72C472.291 86.72 472.76 86.8053 473.272 86.976C474.723 87.232 475.747 88 476.344 89.28C476.856 90.2187 477.112 91.3707 477.112 92.736C477.112 93.504 477.027 94.4853 476.856 95.68C476.771 95.936 476.728 96.2773 476.728 96.704C476.387 99.776 475.789 102.549 474.936 105.024C474.168 107.499 472.973 109.803 471.352 111.936C467.597 116.544 464.013 118.848 460.6 118.848C460.003 118.848 459.533 118.805 459.192 118.72C457.229 118.293 455.864 117.269 455.096 115.648C454.413 114.027 453.944 112.192 453.688 110.144C453.005 104.939 452.664 99.0507 452.664 92.48L452.792 82.368V81.344L452.92 79.296L447.928 80.192C445.368 80.7893 443.064 81.4293 441.016 82.112L439.992 82.624C438.968 89.3653 438.328 94.528 438.072 98.112C437.901 99.4773 437.816 101.525 437.816 104.256C437.901 104.597 437.944 105.195 437.944 106.048C437.944 106.816 437.901 107.413 437.816 107.84C437.816 109.461 437.347 110.997 436.408 112.448C435.555 113.813 434.403 114.837 432.952 115.52C431.843 116.032 430.648 116.288 429.368 116.288C427.064 116.288 425.101 115.52 423.48 113.984C421.603 112.192 420.664 109.803 420.664 106.816L420.792 104.896C421.048 100.459 421.517 96.064 422.2 91.712C422.968 87.2747 423.992 81.984 425.272 75.84C426.296 70.3787 427.021 66.2827 427.448 63.552C428.643 56.2987 429.496 49.6853 430.008 43.712C430.349 39.9573 430.563 36.5013 430.648 33.344V32.832C430.733 31.04 430.904 29.5467 431.16 28.352C431.501 27.1573 432.184 26.048 433.208 25.024C434.659 23.5733 436.451 22.848 438.584 22.848C440.803 22.848 442.637 23.5733 444.088 25.024C445.539 26.4747 446.264 28.5227 446.264 31.168C446.264 32.5333 446.221 33.5147 446.136 34.112L446.008 34.752L445.24 44.224C444.984 49.2587 444.557 53.7387 443.96 57.664C443.789 59.3707 443.448 61.5893 442.936 64.32C444.131 63.8933 446.136 63.296 448.952 62.528L449.72 62.272C451 62.016 452.109 61.7173 453.048 61.376C453.048 55.3173 453.005 50.7947 452.92 47.808V47.552C452.92 39.9573 453.005 34.2827 453.176 30.528C453.432 24.7253 455.608 20.3733 459.704 17.472C461.155 16.448 462.648 15.936 464.184 15.936C465.549 15.936 466.701 16.4053 467.64 17.344C468.664 18.624 469.176 20.288 469.176 22.336C469.176 23.1893 469.091 24.2987 468.92 25.664C468.835 26.0053 468.792 26.4747 468.792 27.072C468.707 28.0107 468.664 29.504 468.664 31.552C468.664 33.088 468.749 35.4773 468.92 38.72L469.048 42.304L469.176 47.552L469.56 58.304L479.416 57.024L480.312 56.896L481.08 56.768ZM524.594 46.656C524.679 44.9493 525.874 43.456 528.178 42.176C530.567 40.8107 532.957 40.128 535.346 40.128C536.711 40.128 537.821 40.4267 538.674 41.024C539.527 41.536 539.911 42.3893 539.826 43.584C539.655 46.8267 539.57 49.4293 539.57 51.392C539.143 62.4853 538.375 71.9147 537.266 79.68C536.242 87.4453 533.895 94.7413 530.226 101.568C526.557 108.395 521.095 112.875 513.842 115.008C511.367 115.691 509.021 116.032 506.802 116.032C501.341 116.032 496.519 114.411 492.338 111.168C488.242 107.925 485.895 103.531 485.298 97.984C485.127 95.7653 485.042 94.1013 485.042 92.992C485.042 87.104 485.938 81.088 487.73 74.944C489.522 68.8 492.125 61.376 495.538 52.672C496.562 50.368 497.714 47.424 498.994 43.84C499.506 42.3893 500.786 41.1947 502.834 40.256C504.967 39.232 507.058 38.72 509.106 38.72C510.471 38.72 511.581 39.0187 512.434 39.616C513.287 40.128 513.714 40.896 513.714 41.92C513.714 42.2613 513.629 42.7733 513.458 43.456C511.751 48.4053 510.429 52.1173 509.49 54.592C507.015 61.504 505.095 67.3067 503.73 72C502.365 76.608 501.426 81.344 500.914 86.208C500.743 88.256 500.658 89.8773 500.658 91.072C500.658 96.1067 501.895 99.7333 504.37 101.952C505.138 102.72 506.162 103.445 507.442 104.128C508.722 104.725 509.917 105.067 511.026 105.152L512.05 105.408C512.135 105.408 512.306 105.28 512.562 105.024C514.695 103.659 516.402 101.355 517.682 98.112C519.047 94.784 519.943 91.84 520.37 89.28C520.797 86.72 521.394 82.6667 522.162 77.12C522.759 72.5973 523.229 67.648 523.57 62.272C523.997 56.896 524.338 51.6907 524.594 46.656ZM575.873 88.768C575.873 87.488 575.489 86.2933 574.721 85.184C573.953 83.9893 572.929 83.0507 571.649 82.368C570.028 81.5147 568.236 81.088 566.273 81.088C565.42 81.088 564.054 81.2587 562.177 81.6C561.58 88 561.153 95.2107 560.897 103.232C565.078 101.184 568.62 98.88 571.521 96.32C574.422 93.6747 575.873 91.1573 575.873 88.768ZM581.761 72.512C584.492 73.536 586.71 75.2 588.417 77.504C590.209 79.7227 591.105 82.1973 591.105 84.928C591.105 86.6347 590.764 88.2987 590.081 89.92C588.545 93.4187 586.07 96.6187 582.657 99.52C579.244 102.421 575.19 105.237 570.497 107.968C560.513 113.856 551.724 116.971 544.129 117.312C542.764 117.397 541.612 117.099 540.673 116.416C539.734 115.733 539.265 114.837 539.265 113.728C539.265 112.448 539.777 111.296 540.801 110.272C541.825 109.248 543.148 108.395 544.769 107.712V107.328C544.769 90.5173 546.646 73.5787 550.401 56.512C550.742 54.8053 552.236 53.312 554.881 52.032C557.526 50.6667 560.044 49.984 562.433 49.984C563.798 49.984 564.822 50.2827 565.505 50.88C566.273 51.392 566.529 52.2027 566.273 53.312C565.334 57.3227 564.524 61.7173 563.841 66.496C566.998 64.7893 569.601 62.656 571.649 60.096C573.782 57.536 574.849 54.8053 574.849 51.904C574.849 47.8933 571.905 45.888 566.017 45.888C562.774 45.888 559.745 46.4 556.929 47.424C555.137 48.0213 553.558 48.32 552.193 48.32C549.548 48.32 548.225 47.3387 548.225 45.376C548.225 43.584 549.761 41.8773 552.833 40.256C555.478 38.8907 558.678 37.7813 562.433 36.928C566.188 35.9893 569.857 35.52 573.441 35.52C578.39 35.52 582.358 36.544 585.345 38.592C588.417 40.5547 589.953 43.7547 589.953 48.192C589.953 52.3733 588.502 56.4693 585.601 60.48C582.7 64.4053 578.988 67.904 574.465 70.976C577.025 71.1467 579.457 71.6587 581.761 72.512Z"
                fill="black"
              />
            </g>
            <defs>
              <radialGradient
                id="c"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(118.122 171.182 60.81) scale(205.794)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF41F8" />
                <stop offset=".707" stop-color="#FF41F8" stop-opacity=".5" />
                <stop offset="1" stop-color="#FF41F8" stop-opacity="0" />
              </radialGradient>
              <linearGradient
                id="b"
                x1="0"
                x2="982"
                y1="192"
                y2="192"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0060B" />
                <stop offset="0" stop-color="#F0070C" />
                <stop offset=".526" stop-color="#CC26D5" />
                <stop offset="1" stop-color="#7702FF" />
              </linearGradient>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h982v239H0z" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </nav>
  `,
  imports: [IconContact, RouterLink],
})
export class NavbarComponent {}