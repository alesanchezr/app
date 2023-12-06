const group = ({ width, height, color }) => (
  <svg
    width={width || '27px'}
    height={height || '22px'}
    viewBox="0 0 27 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5947 12.6562C16.3849 12.9386 16.1378 13.1911 15.8601 13.4069H15.9883C16.5672 13.4076 17.1222 13.6378 17.5316 14.0472C17.941 14.4566 18.1712 15.0116 18.1719 15.5905V20.7194H8.82812V15.5905C8.82877 15.0116 9.05903 14.4566 9.4684 14.0472C9.87776 13.6378 10.4328 13.4076 11.0117 13.4069H11.1399C10.8622 13.1911 10.6151 12.9386 10.4053 12.6562C9.73066 12.7966 9.12486 13.1649 8.6897 13.6993C8.25454 14.2336 8.01652 14.9014 8.01562 15.5905V20.8667C8.01583 21.0431 8.08598 21.2121 8.21069 21.3369C8.3354 21.4616 8.50448 21.5317 8.68084 21.5319H18.3192C18.4955 21.5317 18.6646 21.4616 18.7893 21.3369C18.914 21.2121 18.9842 21.0431 18.9844 20.8667V15.5905C18.9835 14.9014 18.7455 14.2336 18.3103 13.6993C17.8751 13.1649 17.2693 12.7966 16.5947 12.6562Z"
      fill={color || '#00041A'}
    />
    <path
      d="M10.4531 10.3594C10.4531 10.962 10.6318 11.5511 10.9666 12.0521C11.3014 12.5532 11.7773 12.9437 12.334 13.1743C12.8908 13.4049 13.5034 13.4653 14.0944 13.3477C14.6855 13.2301 15.2284 12.94 15.6545 12.5138C16.0806 12.0877 16.3708 11.5448 16.4883 10.9538C16.6059 10.3628 16.5456 9.75013 16.3149 9.19339C16.0843 8.63664 15.6938 8.16079 15.1928 7.82599C14.6917 7.4912 14.1026 7.3125 13.5 7.3125C12.6922 7.31342 11.9177 7.63472 11.3465 8.20592C10.7753 8.77712 10.454 9.55158 10.4531 10.3594ZM13.5 8.125C13.9419 8.125 14.3739 8.25605 14.7414 8.50156C15.1088 8.74708 15.3952 9.09604 15.5643 9.50432C15.7334 9.9126 15.7777 10.3619 15.6914 10.7953C15.6052 11.2287 15.3924 11.6268 15.0799 11.9393C14.7675 12.2518 14.3693 12.4646 13.9359 12.5508C13.5025 12.637 13.0532 12.5928 12.6449 12.4237C12.2367 12.2546 11.8877 11.9682 11.6422 11.6007C11.3967 11.2333 11.2656 10.8013 11.2656 10.3594C11.2663 9.76699 11.5019 9.19906 11.9208 8.78017C12.3397 8.36129 12.9076 8.12567 13.5 8.125ZM1.3125 10.9688C1.31359 9.99939 1.69915 9.07004 2.3846 8.3846C3.07004 7.69915 3.99939 7.31359 4.96875 7.3125H5.39817C4.98813 7.12003 4.61128 6.86364 4.2817 6.55292C3.22883 6.71817 2.26948 7.25372 1.57624 8.0632C0.882998 8.87269 0.501367 9.90299 0.5 10.9688L0.5 15.8438C0.500246 16.0592 0.585928 16.2657 0.738248 16.418C0.890568 16.5703 1.09709 16.656 1.3125 16.6563H7.20312V15.8438H1.3125V10.9688ZM9.00808 7.3125H9.4375C9.91245 7.3125 10.3828 7.40561 10.8219 7.58655C11.0426 7.37389 11.2878 7.18814 11.5522 7.03318C11.1065 6.79331 10.623 6.63147 10.1226 6.55468C9.79349 6.86461 9.41731 7.12039 9.00808 7.3125ZM10.6562 3.45313C10.6562 2.77016 10.4537 2.10254 10.0743 1.53467C9.69486 0.966809 9.15555 0.524214 8.52458 0.262855C7.8936 0.00149618 7.19929 -0.0668872 6.52945 0.0663524C5.85961 0.199592 5.24433 0.52847 4.7614 1.0114C4.27847 1.49433 3.94959 2.10961 3.81635 2.77946C3.68311 3.4493 3.75149 4.1436 4.01285 4.77458C4.27421 5.40556 4.71681 5.94486 5.28467 6.3243C5.85253 6.70373 6.52016 6.90625 7.20312 6.90625C8.11864 6.90523 8.99636 6.54109 9.64373 5.89373C10.2911 5.24636 10.6552 4.36864 10.6562 3.45313ZM7.20312 6.09375C6.68086 6.09375 6.17032 5.93888 5.73607 5.64873C5.30182 5.35857 4.96337 4.94616 4.76351 4.46365C4.56364 3.98114 4.51135 3.4502 4.61324 2.93797C4.71513 2.42573 4.96662 1.95522 5.33592 1.58592C5.70522 1.21662 6.17573 0.965129 6.68796 0.86324C7.2002 0.761351 7.73114 0.813644 8.21365 1.01351C8.69616 1.21337 9.10857 1.55183 9.39872 1.98607C9.68888 2.42032 9.84375 2.93086 9.84375 3.45313C9.84297 4.15323 9.56452 4.82443 9.06947 5.31947C8.57443 5.81452 7.90322 6.09298 7.20312 6.09375ZM17.5625 7.3125H17.9919C17.5827 7.12039 17.2065 6.86461 16.8774 6.55468C16.377 6.63147 15.8935 6.79331 15.4477 7.03318C15.7122 7.18814 15.9574 7.37389 16.1781 7.58655C16.6172 7.40561 17.0876 7.3125 17.5625 7.3125ZM22.7183 6.55292C22.3887 6.86364 22.0119 7.12003 21.6018 7.3125H22.0312C23.0006 7.31359 23.93 7.69915 24.6154 8.3846C25.3008 9.07004 25.6864 9.99939 25.6875 10.9688L25.688 15.8438H19.7969V16.6563H25.6875C25.9029 16.656 26.1094 16.5703 26.2618 16.418C26.4141 16.2657 26.4998 16.0592 26.5 15.8438V10.9688C26.4986 9.90299 26.117 8.87269 25.4238 8.0632C24.7305 7.25372 23.7712 6.71817 22.7183 6.55292ZM19.7969 6.90625C20.4798 6.90625 21.1475 6.70373 21.7153 6.3243C22.2832 5.94486 22.7258 5.40556 22.9871 4.77458C23.2485 4.1436 23.3169 3.4493 23.1836 2.77946C23.0504 2.10961 22.7215 1.49433 22.2386 1.0114C21.7557 0.52847 21.1404 0.199592 20.4705 0.0663524C19.8007 -0.0668872 19.1064 0.00149618 18.4754 0.262855C17.8444 0.524214 17.3051 0.966809 16.9257 1.53467C16.5463 2.10254 16.3438 2.77016 16.3438 3.45313C16.3448 4.36864 16.7089 5.24636 17.3563 5.89373C18.0036 6.54109 18.8814 6.90523 19.7969 6.90625ZM19.7969 0.812501C20.3191 0.812501 20.8297 0.967371 21.2639 1.25753C21.6982 1.54768 22.0366 1.96009 22.2365 2.4426C22.4364 2.92511 22.4886 3.45606 22.3868 3.96829C22.2849 4.48052 22.0334 4.95103 21.6641 5.32033C21.2948 5.68963 20.8243 5.94112 20.312 6.04301C19.7998 6.1449 19.2689 6.09261 18.7864 5.89275C18.3038 5.69288 17.8914 5.35443 17.6013 4.92018C17.3111 4.48593 17.1562 3.97539 17.1562 3.45313C17.157 2.75303 17.4355 2.08182 17.9305 1.58678C18.4256 1.09173 19.0968 0.813277 19.7969 0.812501Z"
      fill={color || '#00041A'}
    />
  </svg>
);

export default group;
