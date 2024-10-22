import * as React from "react";
const ImageUpload = (props) => (
  <svg
    width={110}
    height={72}
    viewBox="0 0 110 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M68.75 6.25H41.25C40.587 6.25 39.9511 6.51339 39.4822 6.98223C39.0134 7.45107 38.75 8.08696 38.75 8.75V31.25C38.75 31.913 39.0134 32.5489 39.4822 33.0178C39.9511 33.4866 40.587 33.75 41.25 33.75H68.75C69.413 33.75 70.0489 33.4866 70.5178 33.0178C70.9866 32.5489 71.25 31.913 71.25 31.25V8.75C71.25 8.08696 70.9866 7.45107 70.5178 6.98223C70.0489 6.51339 69.413 6.25 68.75 6.25ZM68.75 8.75V24.8047L64.6766 20.7328C64.4444 20.5006 64.1688 20.3164 63.8654 20.1907C63.5621 20.0651 63.2369 20.0004 62.9086 20.0004C62.5802 20.0004 62.2551 20.0651 61.9518 20.1907C61.6484 20.3164 61.3728 20.5006 61.1406 20.7328L58.0156 23.8578L51.1406 16.9828C50.6718 16.5143 50.0362 16.2512 49.3734 16.2512C48.7107 16.2512 48.075 16.5143 47.6062 16.9828L41.25 23.3391V8.75H68.75ZM41.25 26.875L49.375 18.75L61.875 31.25H41.25V26.875ZM68.75 31.25H65.4109L59.7859 25.625L62.9109 22.5L68.75 28.3406V31.25ZM57.5 15.625C57.5 15.2542 57.61 14.8916 57.816 14.5833C58.022 14.275 58.3149 14.0346 58.6575 13.8927C59.0001 13.7508 59.3771 13.7137 59.7408 13.786C60.1045 13.8584 60.4386 14.037 60.7008 14.2992C60.963 14.5614 61.1416 14.8955 61.214 15.2592C61.2863 15.6229 61.2492 15.9999 61.1073 16.3425C60.9654 16.6851 60.725 16.978 60.4167 17.184C60.1084 17.39 59.7458 17.5 59.375 17.5C58.8777 17.5 58.4008 17.3025 58.0492 16.9508C57.6975 16.5992 57.5 16.1223 57.5 15.625Z"
      fill="white"
    />
    <path
      d="M6.256 66.16C5.43467 66.16 4.67733 66.016 3.984 65.728C3.30133 65.4293 2.704 65.0133 2.192 64.48C1.68 63.9467 1.28533 63.3173 1.008 62.592C0.730667 61.8667 0.592 61.072 0.592 60.208C0.592 59.344 0.730667 58.5547 1.008 57.84C1.28533 57.1253 1.67467 56.5067 2.176 55.984C2.688 55.4507 3.28533 55.04 3.968 54.752C4.66133 54.464 5.424 54.32 6.256 54.32C7.17333 54.32 8 54.5013 8.736 54.864C9.472 55.2267 10.0747 55.7387 10.544 56.4C11.024 57.0507 11.3173 57.8187 11.424 58.704H9.376C9.248 57.84 8.90133 57.1787 8.336 56.72C7.77067 56.2507 7.08267 56.016 6.272 56.016C5.55733 56.016 4.93333 56.1867 4.4 56.528C3.86667 56.8693 3.45067 57.3547 3.152 57.984C2.85333 58.6027 2.704 59.3387 2.704 60.192C2.704 61.0667 2.85333 61.824 3.152 62.464C3.45067 63.0933 3.872 63.584 4.416 63.936C4.96 64.288 5.584 64.464 6.288 64.464C7.07733 64.464 7.75467 64.2347 8.32 63.776C8.88533 63.3067 9.24267 62.6453 9.392 61.792H11.456C11.328 62.6667 11.024 63.4347 10.544 64.096C10.0747 64.7573 9.472 65.2693 8.736 65.632C8 65.984 7.17333 66.16 6.256 66.16ZM13.0251 66V54.48H15.0411V66H13.0251ZM18.7531 66V60.848C18.7531 60.3467 18.6251 59.968 18.3691 59.712C18.1131 59.456 17.7398 59.328 17.2491 59.328C16.8225 59.328 16.4385 59.424 16.0971 59.616C15.7665 59.808 15.5051 60.0747 15.3131 60.416C15.1318 60.7573 15.0411 61.152 15.0411 61.6L14.8331 59.648C15.1105 59.0507 15.5158 58.576 16.0491 58.224C16.5825 57.8613 17.2225 57.68 17.9691 57.68C18.8545 57.68 19.5425 57.9307 20.0331 58.432C20.5345 58.9333 20.7851 59.6 20.7851 60.432V66H18.7531ZM27.7538 66C27.7004 65.7867 27.6578 65.552 27.6258 65.296C27.6044 65.04 27.5938 64.7307 27.5938 64.368H27.5298V60.496C27.5298 60.0693 27.4071 59.7493 27.1618 59.536C26.9271 59.312 26.5644 59.2 26.0738 59.2C25.5938 59.2 25.2098 59.2907 24.9218 59.472C24.6444 59.6427 24.4738 59.8933 24.4098 60.224H22.4738C22.5591 59.4667 22.9218 58.8533 23.5618 58.384C24.2018 57.9147 25.0604 57.68 26.1378 57.68C27.2578 57.68 28.1058 57.936 28.6818 58.448C29.2578 58.9493 29.5458 59.6907 29.5458 60.672V64.368C29.5458 64.624 29.5618 64.8853 29.5938 65.152C29.6364 65.4187 29.6951 65.7013 29.7698 66H27.7538ZM24.9218 66.16C24.1004 66.16 23.4444 65.9573 22.9538 65.552C22.4738 65.136 22.2338 64.5813 22.2338 63.888C22.2338 63.1413 22.5058 62.5493 23.0498 62.112C23.5938 61.6747 24.3618 61.3813 25.3538 61.232L27.8978 60.848V62.128L25.6898 62.464C25.2098 62.5387 24.8471 62.672 24.6018 62.864C24.3671 63.056 24.2498 63.3227 24.2498 63.664C24.2498 63.9733 24.3618 64.2133 24.5858 64.384C24.8098 64.544 25.1191 64.624 25.5138 64.624C26.0898 64.624 26.5698 64.48 26.9538 64.192C27.3378 63.904 27.5298 63.552 27.5298 63.136L27.7538 64.368C27.5404 64.9547 27.1884 65.4027 26.6978 65.712C26.2178 66.0107 25.6258 66.16 24.9218 66.16ZM31.5876 66V57.84H33.5556V59.76H33.6036V66H31.5876ZM37.3156 66V60.848C37.3156 60.3467 37.1876 59.968 36.9316 59.712C36.6756 59.456 36.3023 59.328 35.8116 59.328C35.385 59.328 35.001 59.424 34.6596 59.616C34.329 59.808 34.0676 60.0747 33.8756 60.416C33.6943 60.7573 33.6036 61.152 33.6036 61.6L33.3956 59.648C33.673 59.0507 34.0783 58.576 34.6116 58.224C35.145 57.8613 35.785 57.68 36.5316 57.68C37.417 57.68 38.105 57.9307 38.5956 58.432C39.097 58.9333 39.3476 59.6 39.3476 60.432V66H37.3156ZM44.9529 69.44C43.8755 69.44 42.9902 69.2053 42.2969 68.736C41.6142 68.2667 41.2089 67.632 41.0809 66.832H43.0009C43.0969 67.1093 43.3049 67.3227 43.6249 67.472C43.9555 67.632 44.3822 67.712 44.9049 67.712C45.6622 67.712 46.2222 67.5413 46.5849 67.2C46.9475 66.8693 47.1289 66.3627 47.1289 65.68V63.92L47.2729 63.952C47.1449 64.5493 46.8195 65.0293 46.2969 65.392C45.7742 65.744 45.1342 65.92 44.3769 65.92C43.6515 65.92 43.0169 65.7493 42.4729 65.408C41.9395 65.0667 41.5235 64.592 41.2249 63.984C40.9262 63.3653 40.7769 62.6453 40.7769 61.824C40.7769 60.992 40.9315 60.2667 41.2409 59.648C41.5502 59.0293 41.9822 58.5493 42.5369 58.208C43.1022 57.856 43.7582 57.68 44.5049 57.68C45.2729 57.68 45.9022 57.8667 46.3929 58.24C46.8942 58.6027 47.2035 59.1093 47.3209 59.76L47.1929 59.776V57.84H49.1609V65.664C49.1609 66.8267 48.7822 67.744 48.0249 68.416C47.2782 69.0987 46.2542 69.44 44.9529 69.44ZM45.0329 64.32C45.6835 64.32 46.2009 64.1013 46.5849 63.664C46.9795 63.216 47.1769 62.592 47.1769 61.792C47.1769 60.992 46.9795 60.3733 46.5849 59.936C46.1902 59.4987 45.6675 59.28 45.0169 59.28C44.3769 59.28 43.8595 59.504 43.4649 59.952C43.0702 60.3893 42.8729 61.008 42.8729 61.808C42.8729 62.608 43.0702 63.2267 43.4649 63.664C43.8595 64.1013 44.3822 64.32 45.0329 64.32ZM54.9704 66.16C54.1064 66.16 53.349 65.9787 52.6984 65.616C52.0584 65.2533 51.557 64.752 51.1944 64.112C50.8424 63.472 50.6664 62.736 50.6664 61.904C50.6664 61.072 50.8424 60.3413 51.1944 59.712C51.557 59.072 52.0584 58.576 52.6984 58.224C53.3384 57.8613 54.085 57.68 54.9384 57.68C55.749 57.68 56.453 57.8507 57.0504 58.192C57.6477 58.5227 58.1117 58.992 58.4424 59.6C58.773 60.208 58.9384 60.9173 58.9384 61.728C58.9384 61.8773 58.933 62.016 58.9224 62.144C58.9117 62.272 58.8957 62.4 58.8744 62.528H51.9144V61.12H57.3224L56.9064 61.504C56.9064 60.736 56.7304 60.16 56.3784 59.776C56.0264 59.392 55.5357 59.2 54.9064 59.2C54.2237 59.2 53.6797 59.4347 53.2744 59.904C52.8797 60.3733 52.6824 61.0507 52.6824 61.936C52.6824 62.8107 52.8797 63.4827 53.2744 63.952C53.6797 64.4107 54.2504 64.64 54.9864 64.64C55.413 64.64 55.7864 64.56 56.1064 64.4C56.4264 64.24 56.661 63.9947 56.8104 63.664H58.7144C58.4477 64.432 57.9944 65.04 57.3544 65.488C56.725 65.936 55.9304 66.16 54.9704 66.16ZM63.4608 66V54.48H65.5408V66H63.4608ZM67.6033 66V57.84H69.5713V59.76H69.6193V66H67.6033ZM73.0913 66V60.736C73.0913 60.256 72.9686 59.904 72.7233 59.68C72.4886 59.4453 72.1526 59.328 71.7153 59.328C71.3313 59.328 70.9793 59.4187 70.6593 59.6C70.3393 59.7813 70.0833 60.0373 69.8913 60.368C69.7099 60.6987 69.6193 61.0827 69.6193 61.52L69.4113 59.648C69.6886 59.0507 70.0886 58.576 70.6113 58.224C71.1339 57.8613 71.7419 57.68 72.4353 57.68C73.2673 57.68 73.9233 57.92 74.4033 58.4C74.8833 58.8693 75.1233 59.4773 75.1233 60.224V66H73.0913ZM78.5793 66V60.736C78.5793 60.256 78.4619 59.904 78.2273 59.68C77.9926 59.4453 77.6566 59.328 77.2193 59.328C76.8246 59.328 76.4673 59.4187 76.1473 59.6C75.8273 59.7813 75.5766 60.0373 75.3953 60.368C75.2139 60.6987 75.1233 61.0827 75.1233 61.52L74.7713 59.648C75.0379 59.0507 75.4433 58.576 75.9873 58.224C76.5313 57.8613 77.1606 57.68 77.8753 57.68C78.7286 57.68 79.3953 57.9253 79.8753 58.416C80.3659 58.896 80.6113 59.536 80.6113 60.336V66H78.5793ZM87.5975 66C87.5442 65.7867 87.5015 65.552 87.4695 65.296C87.4482 65.04 87.4375 64.7307 87.4375 64.368H87.3735V60.496C87.3735 60.0693 87.2508 59.7493 87.0055 59.536C86.7708 59.312 86.4082 59.2 85.9175 59.2C85.4375 59.2 85.0535 59.2907 84.7655 59.472C84.4882 59.6427 84.3175 59.8933 84.2535 60.224H82.3175C82.4028 59.4667 82.7655 58.8533 83.4055 58.384C84.0455 57.9147 84.9042 57.68 85.9815 57.68C87.1015 57.68 87.9495 57.936 88.5255 58.448C89.1015 58.9493 89.3895 59.6907 89.3895 60.672V64.368C89.3895 64.624 89.4055 64.8853 89.4375 65.152C89.4802 65.4187 89.5388 65.7013 89.6135 66H87.5975ZM84.7655 66.16C83.9442 66.16 83.2882 65.9573 82.7975 65.552C82.3175 65.136 82.0775 64.5813 82.0775 63.888C82.0775 63.1413 82.3495 62.5493 82.8935 62.112C83.4375 61.6747 84.2055 61.3813 85.1975 61.232L87.7415 60.848V62.128L85.5335 62.464C85.0535 62.5387 84.6908 62.672 84.4455 62.864C84.2108 63.056 84.0935 63.3227 84.0935 63.664C84.0935 63.9733 84.2055 64.2133 84.4295 64.384C84.6535 64.544 84.9628 64.624 85.3575 64.624C85.9335 64.624 86.4135 64.48 86.7975 64.192C87.1815 63.904 87.3735 63.552 87.3735 63.136L87.5975 64.368C87.3842 64.9547 87.0322 65.4027 86.5415 65.712C86.0615 66.0107 85.4695 66.16 84.7655 66.16ZM94.8904 69.44C93.813 69.44 92.9277 69.2053 92.2344 68.736C91.5517 68.2667 91.1464 67.632 91.0184 66.832H92.9384C93.0344 67.1093 93.2424 67.3227 93.5624 67.472C93.893 67.632 94.3197 67.712 94.8424 67.712C95.5997 67.712 96.1597 67.5413 96.5224 67.2C96.885 66.8693 97.0664 66.3627 97.0664 65.68V63.92L97.2104 63.952C97.0824 64.5493 96.757 65.0293 96.2344 65.392C95.7117 65.744 95.0717 65.92 94.3144 65.92C93.589 65.92 92.9544 65.7493 92.4104 65.408C91.877 65.0667 91.461 64.592 91.1624 63.984C90.8637 63.3653 90.7144 62.6453 90.7144 61.824C90.7144 60.992 90.869 60.2667 91.1784 59.648C91.4877 59.0293 91.9197 58.5493 92.4744 58.208C93.0397 57.856 93.6957 57.68 94.4424 57.68C95.2104 57.68 95.8397 57.8667 96.3304 58.24C96.8317 58.6027 97.141 59.1093 97.2584 59.76L97.1304 59.776V57.84H99.0984V65.664C99.0984 66.8267 98.7197 67.744 97.9624 68.416C97.2157 69.0987 96.1917 69.44 94.8904 69.44ZM94.9704 64.32C95.621 64.32 96.1384 64.1013 96.5224 63.664C96.917 63.216 97.1144 62.592 97.1144 61.792C97.1144 60.992 96.917 60.3733 96.5224 59.936C96.1277 59.4987 95.605 59.28 94.9544 59.28C94.3144 59.28 93.797 59.504 93.4024 59.952C93.0077 60.3893 92.8104 61.008 92.8104 61.808C92.8104 62.608 93.0077 63.2267 93.4024 63.664C93.797 64.1013 94.3197 64.32 94.9704 64.32ZM104.908 66.16C104.044 66.16 103.287 65.9787 102.636 65.616C101.996 65.2533 101.495 64.752 101.132 64.112C100.78 63.472 100.604 62.736 100.604 61.904C100.604 61.072 100.78 60.3413 101.132 59.712C101.495 59.072 101.996 58.576 102.636 58.224C103.276 57.8613 104.023 57.68 104.876 57.68C105.687 57.68 106.391 57.8507 106.988 58.192C107.585 58.5227 108.049 58.992 108.38 59.6C108.711 60.208 108.876 60.9173 108.876 61.728C108.876 61.8773 108.871 62.016 108.86 62.144C108.849 62.272 108.833 62.4 108.812 62.528H101.852V61.12H107.26L106.844 61.504C106.844 60.736 106.668 60.16 106.316 59.776C105.964 59.392 105.473 59.2 104.844 59.2C104.161 59.2 103.617 59.4347 103.212 59.904C102.817 60.3733 102.62 61.0507 102.62 61.936C102.62 62.8107 102.817 63.4827 103.212 63.952C103.617 64.4107 104.188 64.64 104.924 64.64C105.351 64.64 105.724 64.56 106.044 64.4C106.364 64.24 106.599 63.9947 106.748 63.664H108.652C108.385 64.432 107.932 65.04 107.292 65.488C106.663 65.936 105.868 66.16 104.908 66.16Z"
      fill="white"
    />
  </svg>
);
export default ImageUpload;