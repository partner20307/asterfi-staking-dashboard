import React from "react";
import { IconWrapper } from "./styles/icon.styled";
import { BasicVar } from "styles/variables";

interface PropsType {
    icon: string
    width?: string
    height?: string
    fill?: string
}

const icons: any = {
    'Setting': (
        <svg viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M16.6266 30H11.3742C11.0451 30.0001 10.7259 29.8832 10.4695 29.6687C10.2131 29.4543 10.0349 29.1552 9.96446 28.821L9.37717 25.995C8.59372 25.6382 7.85084 25.1919 7.16221 24.6645L4.51147 25.542C4.19772 25.646 3.85918 25.6353 3.55207 25.5117C3.24497 25.3881 2.98777 25.159 2.8232 24.8625L0.191224 20.136C0.028378 19.8392 -0.0327503 19.4937 0.01784 19.1561C0.0684304 18.8185 0.227744 18.5087 0.469717 18.2775L2.52595 16.3275C2.43244 15.4442 2.43244 14.5528 2.52595 13.6695L0.469717 11.724C0.227401 11.4927 0.067871 11.1826 0.0172724 10.8447C-0.0333262 10.5067 0.0280086 10.161 0.191224 9.864L2.81743 5.1345C2.982 4.83797 3.2392 4.60889 3.5463 4.48528C3.85341 4.36168 4.19195 4.35099 4.5057 4.455L7.15644 5.3325C7.50852 5.0625 7.87504 4.8105 8.25309 4.5825C8.61817 4.3695 8.99334 4.176 9.37717 4.0035L9.9659 1.1805C10.036 0.846296 10.2138 0.547032 10.47 0.332323C10.7261 0.117615 11.0452 0.000359949 11.3742 0H16.6266C16.9557 0.000359949 17.2747 0.117615 17.5309 0.332323C17.787 0.547032 17.9649 0.846296 18.035 1.1805L18.6295 4.005C19.4119 4.3639 20.1546 4.81001 20.8444 5.3355L23.4966 4.458C23.8102 4.35437 24.1484 4.36526 24.4552 4.48884C24.762 4.61243 25.0189 4.84129 25.1835 5.1375L27.8097 9.867C28.1444 10.4775 28.029 11.25 27.5312 11.7255L25.4749 13.6755C25.5684 14.5588 25.5684 15.4502 25.4749 16.3335L27.5312 18.2835C28.029 18.7605 28.1444 19.5315 27.8097 20.142L25.1835 24.8715C25.0189 25.168 24.7617 25.3971 24.4546 25.5207C24.1475 25.6443 23.8089 25.655 23.4952 25.551L20.8444 24.6735C20.1563 25.2005 19.4139 25.6463 18.6309 26.0025L18.035 28.821C17.9646 29.1549 17.7866 29.4538 17.5305 29.6683C17.2744 29.8827 16.9555 29.9997 16.6266 30ZM13.9947 9C12.4639 9 10.9958 9.63214 9.91334 10.7574C8.8309 11.8826 8.22279 13.4087 8.22279 15C8.22279 16.5913 8.8309 18.1174 9.91334 19.2426C10.9958 20.3679 12.4639 21 13.9947 21C15.5255 21 16.9936 20.3679 18.076 19.2426C19.1584 18.1174 19.7666 16.5913 19.7666 15C19.7666 13.4087 19.1584 11.8826 18.076 10.7574C16.9936 9.63214 15.5255 9 13.9947 9Z" fill="currentColor" />
        </svg>
    ),
    'Close': (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1988 12.0002L23.5439 2.65458C24.152 2.04669 24.152 1.06381 23.5439 0.455919C22.936 -0.151973 21.9531 -0.151973 21.3453 0.455919L11.9999 9.80151L2.65474 0.455919C2.04658 -0.151973 1.064 -0.151973 0.456123 0.455919C-0.152041 1.06381 -0.152041 2.04669 0.456123 2.65458L9.80124 12.0002L0.456123 21.3458C-0.152041 21.9537 -0.152041 22.9365 0.456123 23.5444C0.759067 23.8477 1.15739 24 1.55543 24C1.95347 24 2.35151 23.8477 2.65474 23.5444L11.9999 14.1988L21.3453 23.5444C21.6485 23.8477 22.0465 24 22.4446 24C22.8426 24 23.2406 23.8477 23.5439 23.5444C24.152 22.9365 24.152 21.9537 23.5439 21.3458L14.1988 12.0002Z" fill="currentColor" />
        </svg>
    ),
    'Search': (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5.75 2.27093C7.14732 1.46262 8.76964 1 10.5 1C15.7467 1 20 5.25329 20 10.5C20 15.7467 15.7467 20 10.5 20C5.25329 20 1 15.7467 1 10.5C1 8.76964 1.46262 7.14732 2.27093 5.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'Speed': (
        <svg viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.4511 0.0863926C16.3521 0.176099 16.1423 0.588078 14.7105 3.50378C14.4031 4.1299 13.8914 5.17155 13.5734 5.81854C13.0106 6.96396 12.4562 8.09264 11.312 10.4228C11.0046 11.0489 10.5025 12.0706 10.1964 12.6933C9.52689 14.0552 9.55705 13.9881 9.46827 14.3136C9.41931 14.4931 9.41931 15.055 9.46827 15.2345C9.5908 15.6838 9.75243 15.9755 10.0345 16.2563C10.1851 16.4063 10.603 16.6967 10.6681 16.6967C10.6882 16.6967 10.7397 16.7147 10.7825 16.7368C10.942 16.8189 11.1321 16.8485 11.5 16.8485C11.6999 16.8485 11.8966 16.8384 11.9371 16.8261C11.9776 16.8139 12.0622 16.789 12.1251 16.7709C12.266 16.7304 12.6107 16.5627 12.7476 16.468C12.9859 16.3033 13.2313 16.0116 13.38 15.7165C13.514 15.4505 13.5087 15.4687 13.7261 14.5337C13.7649 14.3667 13.8334 14.0708 13.8784 13.876C13.9233 13.6812 13.9919 13.3852 14.0308 13.2182C14.0697 13.0512 14.1383 12.7553 14.1833 12.5605C14.2282 12.3657 14.2968 12.0697 14.3357 11.9027C14.3746 11.7358 14.4432 11.4398 14.4882 11.245C14.5331 11.0502 14.6018 10.7542 14.6407 10.5872C14.6796 10.4203 14.7368 10.1698 14.7677 10.0307C14.7986 9.89153 14.8557 9.64108 14.8947 9.47411C14.9336 9.30714 15.0022 9.01116 15.0472 8.81636C15.0921 8.62157 15.1607 8.32558 15.1996 8.15861C15.2386 7.99164 15.3072 7.69566 15.3521 7.50086C15.3971 7.30607 15.4657 7.01008 15.5046 6.84311C15.5435 6.67615 15.6121 6.38016 15.657 6.18537C15.702 5.99057 15.7706 5.69458 15.8095 5.52762C15.8484 5.36065 15.917 5.06466 15.9619 4.86987C16.0069 4.67507 16.0755 4.37909 16.1144 4.21212C16.1533 4.04515 16.2219 3.74917 16.2668 3.55437C16.3118 3.35958 16.3804 3.06359 16.4193 2.89662C16.4582 2.72966 16.5268 2.43367 16.5718 2.23887C16.6167 2.04408 16.6853 1.74809 16.7242 1.58113C16.7631 1.41416 16.8314 1.11817 16.876 0.923378C16.9206 0.728583 16.9676 0.528046 16.9804 0.477728C17.0511 0.200487 16.9121 0 16.6493 0C16.5678 0 16.5267 0.0179361 16.4511 0.0863926ZM12.5444 2.00783C12.4994 2.04061 12.4913 2.08681 12.4743 2.40751C12.4282 3.27597 12.4031 3.86974 12.3904 4.38921C12.3746 5.0363 12.373 5.03094 12.5851 5.06342C12.9607 5.12093 13.1015 5.13676 13.1325 5.12492C13.1512 5.11779 13.2079 5.02335 13.2585 4.91503C13.3091 4.8067 13.6119 4.18872 13.9314 3.54172C14.2509 2.89473 14.5263 2.32256 14.5435 2.27024C14.5707 2.18772 14.5691 2.16943 14.5315 2.13204C14.4607 2.06149 13.8864 2.00049 13.1288 1.98306C12.686 1.97284 12.5865 1.97707 12.5444 2.00783ZM10.9742 2.03975C10.9654 2.04851 10.8749 2.06556 10.773 2.07765C10.5696 2.10181 10.3452 2.13723 10.1686 2.17305C10.1057 2.1858 9.99135 2.20824 9.91449 2.22289C9.61024 2.2809 8.98798 2.45216 8.6059 2.58308C8.13069 2.74587 8.00591 2.79141 7.85632 2.85655C7.76549 2.89609 7.60541 2.96518 7.50059 3.01008C7.08977 3.18603 6.47639 3.50421 6.10307 3.73502C5.62235 4.03223 5.51446 4.1018 5.32809 4.23471C5.21628 4.31445 5.11053 4.39824 5.09305 4.42091C5.02427 4.51016 5.05819 4.59781 5.29823 4.95115C6.17137 6.23642 6.17953 6.2477 6.24918 6.26511C6.29969 6.27773 6.34827 6.26445 6.43281 6.21489C6.58341 6.1266 7.16036 5.84422 7.38625 5.74824C7.48408 5.70668 7.60973 5.65315 7.66545 5.62929C7.99046 5.49023 8.88177 5.23555 9.38089 5.13912C9.85073 5.04835 10.3856 4.98877 10.9648 4.96271C11.301 4.94759 11.3457 4.9403 11.3791 4.89517C11.4197 4.84035 11.415 4.47907 11.3638 3.71881C11.3502 3.51706 11.3277 3.16415 11.3138 2.93457C11.2715 2.23498 11.2586 2.15458 11.1768 2.08451C11.1097 2.02708 11.0092 2.00489 10.9742 2.03975ZM17.1229 2.89989C17.1029 2.9713 16.9688 3.53436 16.8767 3.93384C16.8317 4.12864 16.7631 4.42462 16.7242 4.59159C16.6853 4.75856 16.6167 5.05454 16.5718 5.24934C16.5268 5.44413 16.4563 5.74156 16.415 5.91028C16.3693 6.0972 16.3431 6.26493 16.3479 6.33961L16.3558 6.4622L16.6353 6.65927C16.789 6.76765 16.953 6.8739 16.9998 6.89533C17.0767 6.93065 17.0906 6.93052 17.1464 6.89412C17.1803 6.872 17.3145 6.69211 17.4447 6.49433C17.5748 6.29658 17.9216 5.77048 18.2152 5.32523C18.9536 4.20544 19.1052 3.96817 19.1253 3.90045C19.1589 3.78691 18.988 3.67067 18.2674 3.31708C17.4488 2.91537 17.3823 2.88612 17.2455 2.86745C17.1529 2.85483 17.1341 2.85981 17.1229 2.89989ZM20.1448 4.71183C20.0386 4.82102 20.0025 4.86268 19.7991 5.11045C19.7364 5.18683 19.6791 5.25503 19.6717 5.26199C19.6643 5.26895 19.6072 5.33725 19.5447 5.41378C19.4822 5.4903 19.4246 5.55861 19.4167 5.56556C19.4089 5.57252 19.3064 5.69775 19.1889 5.84384C19.0715 5.98994 18.9689 6.11516 18.9611 6.12212C18.9533 6.12908 18.8957 6.19738 18.8332 6.27391C18.7707 6.35044 18.7135 6.41874 18.7061 6.4257C18.6988 6.43265 18.6416 6.50096 18.5791 6.57749C18.5166 6.65401 18.459 6.72232 18.4512 6.72927C18.4434 6.73623 18.3406 6.86146 18.2228 7.00755C18.1051 7.15365 17.9816 7.30164 17.9484 7.33643C17.9152 7.37121 17.8714 7.43775 17.8511 7.48429C17.8075 7.58402 17.8254 7.62123 18.0015 7.79822C18.0606 7.85769 18.1605 7.96857 18.2234 8.04467C18.2863 8.12074 18.368 8.215 18.405 8.25409C18.4952 8.34933 18.8442 8.79491 19.0179 9.0365C19.2349 9.33836 19.5729 9.91728 19.7683 10.3216C20.0393 10.8823 20.0752 10.9665 20.1836 11.2945C20.2933 11.6263 20.3271 11.6918 20.4196 11.7521C20.4864 11.7957 20.4992 11.7921 20.9168 11.6125C21.0709 11.5462 21.1495 11.514 21.4758 11.3841C21.5457 11.3563 21.66 11.3107 21.7299 11.2829C21.7997 11.2551 21.9141 11.2096 21.984 11.1817C22.0538 11.1539 22.1682 11.1084 22.2381 11.0805C22.3079 11.0527 22.4223 11.0072 22.4922 10.9793C22.562 10.9515 22.6764 10.906 22.7462 10.8781C22.8161 10.8503 22.9276 10.8061 22.994 10.7799C23.0604 10.7537 23.1747 10.7082 23.2481 10.6787C23.3215 10.6493 23.4387 10.6024 23.5085 10.5746C23.5784 10.5467 23.6927 10.5012 23.7626 10.4734C23.8325 10.4456 23.9468 10.4 24.0167 10.3722C24.0866 10.3444 24.2038 10.2978 24.2772 10.2688C24.5063 10.1781 24.5826 10.1341 24.6357 10.0624L24.6871 9.99292L24.4422 9.50095C24.1859 8.98601 23.7555 8.25019 23.5092 7.90563C23.4296 7.79432 23.3118 7.62804 23.2473 7.5361C23.1251 7.36188 22.769 6.90105 22.666 6.78384C22.6333 6.7466 22.555 6.65391 22.4922 6.57789C22.3422 6.39658 21.2474 5.30704 21.0686 5.16115C20.9921 5.09872 20.9238 5.04139 20.9168 5.03375C20.8767 4.98986 20.5083 4.70353 20.4337 4.6582C20.3078 4.58183 20.2632 4.5901 20.1448 4.71183ZM3.62144 5.71108C3.41412 5.91632 3.19326 6.14686 3.13063 6.22336C3.06799 6.29987 2.99868 6.37953 2.97657 6.4004C2.84536 6.52428 2.18779 7.41144 2.01089 7.70325C1.95183 7.80064 1.88013 7.91347 1.85154 7.954C1.66517 8.21814 1.12466 9.2976 0.894065 9.86623C0.86304 9.94275 0.821064 10.0443 0.800787 10.0918C0.730581 10.2563 0.640047 10.5458 0.640047 10.6058C0.640047 10.6963 0.686877 10.739 0.868732 10.8144C0.959571 10.852 1.07391 10.9002 1.12283 10.9213C1.17174 10.9425 1.27658 10.9805 1.35581 11.0058C1.43506 11.0311 1.53454 11.0697 1.57689 11.0915C1.66555 11.1371 1.79005 11.1429 1.86168 11.1048C1.8889 11.0903 1.97521 10.9508 2.0535 10.7949C2.13178 10.6389 2.23309 10.4487 2.2786 10.3722C2.32411 10.2957 2.39139 10.1818 2.42808 10.1192C2.53201 9.94184 2.69577 9.68985 2.8747 9.43194C3.0324 9.20463 3.50438 8.60368 3.58668 8.52543C3.6086 8.50456 3.67782 8.42513 3.74045 8.34888C3.88486 8.17316 4.27055 7.78855 4.45136 7.64C4.52756 7.57739 4.63166 7.48632 4.68266 7.43762C4.73366 7.38892 4.88411 7.26369 5.01697 7.15934C5.22744 6.99404 5.3662 6.85083 5.3662 6.79894C5.3662 6.7801 5.06942 6.40397 5.01179 6.3498C4.98961 6.32893 4.92039 6.24924 4.85801 6.17272C4.79563 6.09619 4.72703 6.0165 4.70555 5.99563C4.68408 5.97476 4.61528 5.89517 4.55264 5.8188C4.22308 5.41686 4.14261 5.33788 4.06272 5.33788C4.01376 5.33788 3.90808 5.42726 3.62144 5.71108ZM24.9315 11.3871C24.7685 11.4353 24.5932 11.4858 24.2449 11.5849C24.1471 11.6127 23.987 11.6583 23.8892 11.6861C23.7913 11.7139 23.6342 11.7585 23.54 11.7852C23.2795 11.859 23.0333 11.9291 22.8225 11.9895C22.7177 12.0195 22.5519 12.0669 22.454 12.0947C22.3562 12.1225 22.1961 12.1681 22.0983 12.1959C22.0005 12.2237 21.8431 12.2684 21.7487 12.2952C21.5891 12.3404 21.4735 12.3733 21.0438 12.496C20.953 12.522 20.8462 12.5504 20.8066 12.5592C20.767 12.568 20.7056 12.6039 20.6703 12.6391C20.6003 12.7088 20.5997 12.7598 20.6627 13.1929C20.7503 13.7941 20.7794 15.0721 20.7173 15.5836C20.6566 16.0825 20.6461 16.1473 20.558 16.5702C20.51 16.8007 20.503 16.9231 20.5355 16.9622C20.5634 16.9957 20.8891 17.0002 23.2258 16.9997C25.7194 16.9992 25.8879 16.9964 25.9421 16.9548L26 16.9105L25.9885 16.051C25.9822 15.5782 25.9655 15.0662 25.9516 14.9132C25.9056 14.4095 25.856 14.007 25.7957 13.6483C25.7793 13.5509 25.7566 13.4143 25.7453 13.3447C25.6833 12.9656 25.4689 12.1053 25.3354 11.7007C25.2608 11.4744 25.1738 11.3292 25.1168 11.3359C25.1057 11.3372 25.0223 11.3602 24.9315 11.3871ZM0.322531 11.8962C0.252985 11.9558 0.234208 12.015 0.180137 12.3454C0.165323 12.4359 0.142607 12.5725 0.129674 12.649C0.0309579 13.232 0.000492019 13.6959 9.2397e-06 14.6223C-0.000397311 15.4001 0.012409 15.6546 0.0788547 16.1907C0.15709 16.822 0.182855 16.9344 0.258347 16.9747C0.327511 17.0115 0.697345 17.007 0.749918 16.9686C0.788794 16.9403 0.794359 16.8547 0.803735 16.1401C0.817583 15.0829 0.866725 14.5598 1.02119 13.8254C1.0329 13.7697 1.05602 13.6559 1.07257 13.5724C1.13482 13.2585 1.23252 12.8808 1.31599 12.6314C1.4317 12.2857 1.42774 12.1602 1.29886 12.0915C1.25419 12.0677 0.895869 11.9667 0.576524 11.888C0.520623 11.8742 0.456007 11.8572 0.43291 11.8503C0.409812 11.8433 0.360162 11.864 0.322531 11.8962ZM11.8486 13.7475C12.042 13.806 12.159 13.8772 12.3127 14.0303C12.4805 14.1974 12.5132 14.2531 12.5558 14.4452C12.5728 14.5217 12.5965 14.6225 12.6084 14.6691C12.6211 14.7185 12.6202 14.7798 12.6063 14.8162C12.5932 14.8505 12.5822 14.9091 12.5819 14.9465C12.5806 15.1087 12.3987 15.3806 12.1725 15.5586C12.0199 15.6787 11.8317 15.7354 11.5876 15.7351C11.2944 15.7347 11.0912 15.6563 10.8716 15.459C10.7223 15.3249 10.5508 14.9529 10.5499 14.7614C10.5493 14.6159 10.6344 14.3393 10.7275 14.1841C10.8375 14.0009 11.0928 13.8081 11.2995 13.7522C11.4694 13.7061 11.705 13.7042 11.8486 13.7475Z" fill="currentColor" />
        </svg>
    ),
    'ArrowRight': (
        <svg viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L0 10L4.54262e-07 0L9 5Z" fill="currentColor" />
        </svg>
    ),
    'Check': (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.34146 5.5072L0 7.9049L4.82927 13L12 5.28242V0L4.82927 8.87896L2.34146 5.5072Z" fill="currentColor" />
        </svg>
    )
}

const Icon = ({ icon, width, height, fill }: PropsType) => {
    return (
        <IconWrapper width={width || '24px'} height={height || '24px'} fill={fill || BasicVar.color.label} >
            {icons[icon]}
        </IconWrapper>
    )
}

export default Icon;