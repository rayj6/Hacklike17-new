import svgPaths from "./svg-fnob7xx9ye";
import imgEllipse1 from "figma:asset/9e769315bcb52f0798dbc70b12ff318c950a7c28.png";
import img1759158932111ThDCh4VxG7Jpg from "figma:asset/ec882f71ca453c9de30e9320cb3b268ba1c6f9e0.png";
import img1724360847451TrwUheFq6OJpg from "figma:asset/9498294abecfeb4eed58ac69175ade4c80c139c0.png";
import imgVerifiedPng from "figma:asset/62d6f14ebabc954dcd82e1cead388f2c78a2f157.png";
import img1761877419832WNa9LNSlT5Jpg from "figma:asset/f9e8ed2ad49f3e5d3f92d418908b35c227418fef.png";
import imgImage1427 from "figma:asset/e2cef54246892dedcf6db2cd6da707d67af22378.png";
import imgCreditsToUnsplashCom from "figma:asset/801f5f744655e36fc1612f022bd12df493daeac9.png";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import { X } from "lucide-react";

function Group10() {
  return (
    <div className="absolute bottom-[-328px] h-[526px] left-[6px] right-[-189px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 526 526">
        <g id="Group 2144770809" opacity="0.8">
          <circle cx="263" cy="263" fill="var(--fill-0, #3167F3)" fillOpacity="0.08" id="Ellipse 3" r="263" />
          <circle cx="263" cy="263" fill="var(--fill-0, #3167F3)" fillOpacity="0.08" id="Ellipse 2" r="211.383" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#333333] w-[142px]">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] text-center text-nowrap">
        <p className="leading-[27px] whitespace-pre">User name</p>
      </div>
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center min-w-full opacity-50 relative shrink-0 text-[14px] w-[min-content]">
        <p className="leading-[21px]">{`example@gmail.com `}</p>
      </div>
    </div>
  );
}

function IconOutlineVi() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Outline/Ví">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Outline/VÃ­">
          <path d={svgPaths.p3df53080} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          <path d={svgPaths.p29e01c00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p24fb8680} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(51,51,51,0.08)] content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]" />
      <IconOutlineVi />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[21px] whitespace-pre">1.234.567 ₫</p>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame19 />
      <Container />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[80px]">
        <img alt="" className="block max-w-none size-full" height="80" src={imgEllipse1} width="80" />
      </div>
      <Frame106 />
    </div>
  );
}

function IconOutlineKimTin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/Outline/Kiếm tiền">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/Outline/Kiáº¿m tiá»n">
          <path d={svgPaths.p1f824e80} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p12747e80} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px opacity-80 relative shrink-0" data-name="Container">
      <IconOutlineKimTin />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[19.49px] whitespace-pre">Nạp trong tháng</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[21px] whitespace-pre">1.234.567 ₫</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function IconOutlineLevel() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/Outline/level">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/Outline/level">
          <path d={svgPaths.p2b0c3b00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7f68a18} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p33347b00} id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px opacity-80 relative shrink-0" data-name="Container">
      <IconOutlineLevel />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[19.49px] whitespace-pre">Cấp bậc</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[21px] whitespace-pre">Thành viên</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white dark:bg-[#3a3a3a] h-[8px] overflow-clip relative rounded-[99px] shrink-0 w-full transition-colors" data-name="Background">
      <div className="absolute flex h-[8px] items-center justify-center left-0 top-1/2 translate-y-[-50%] w-[158px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#3167f3] h-[8px] w-[158px]" />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Background />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame26 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-80 dark:opacity-90 relative shrink-0 text-[#333333] dark:text-[#d0d0d0] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Nạp thêm `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">500.000đ</span>
          <span>{` để thăng hạng `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Cộng tác viên</span>.
        </p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame108 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame107 />
      <Frame22 />
    </div>
  );
}

function Frame100() {
  const { theme } = useTheme();
  
  const backgroundStyle = theme === 'dark' 
    ? { backgroundImage: "linear-gradient(0.301709deg, rgb(30, 85, 127) 20.727%, rgb(42, 42, 42) 99.639%), linear-gradient(90deg, rgb(42, 42, 42) 0%, rgb(42, 42, 42) 100%)" }
    : { backgroundImage: "linear-gradient(0.301709deg, rgb(60, 170, 255) 20.727%, rgb(255, 255, 255) 99.639%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" };
  
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[12px] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(189,189,189,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-all" style={backgroundStyle}>
      <Group10 />
      <Frame25 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[24px] rounded-[99px] shrink-0 w-[6px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Hoạt động mới</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[3.5px] shrink-0 size-[14px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#adb5bd] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#464457] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Lọc thông báo quan trọng</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <Label />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="absolute bg-[#3167f3] left-[47px] rounded-[3.5px] shadow-[0px_0px_0px_4px_rgba(28,142,249,0.15)] size-[7px] top-[7px]" data-name="Background+Shadow" />;
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[64px] pr-0 py-0 relative w-full">
          <div className="-webkit-box flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[12px] w-[min-content]">
            <p className="leading-[21px]">{`Nhận lại đơn hàng tăng like số lương lớn( ở nhóm "dịchvụ khác" ), tối thiểu mua 300k like, không giới hạn loại fanpage. `}</p>
          </div>
          <BackgroundShadow />
          <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-0 opacity-60 text-[#333333] text-[11px] text-nowrap top-[10.5px] translate-y-[-50%]">
            <p className="leading-[16.5px] whitespace-pre">16/11</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="absolute bg-[#ecf3fb] bottom-[-0.31%] left-[50px] top-[0.31%] w-px" data-name="Vertical Divider" />
      {[...Array(8).keys()].map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[400px] items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3167f3] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Xem tất cả thông báo</p>
      </div>
    </div>
  );
}

function Gra() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[0.2px] content-stretch flex flex-col from-[53.659%] from-[rgba(255,255,255,0)] dark:from-[rgba(42,42,42,0)] items-center justify-center left-0 right-0 px-0 py-[16px] to-[#ffffff] dark:to-[#2a2a2a] to-[47.944%]" data-name="Gra">
      <Button />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col gap-[16px] items-center overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <Header />
      <Container5 />
      <Gra />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="h-[24px] rounded-[99px] shrink-0 w-[6px]" />
      <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">
        <p className="leading-[24px]">Bạn cần hỗ trợ?</p>
      </div>
    </div>
  );
}

function IconFillFacebook() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon/fill/facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.p2c55b5c0} fill="var(--fill-0, #1877F2)" id="Vector" />
          <path d={svgPaths.p18bec640} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillFacebook />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#3167f3] text-[14px] text-center w-[min-content]">
        <p className="mb-0">{`Fanpage `}</p>
        <p>Hỗ trợ</p>
      </div>
    </div>
  );
}

function IconFillZalo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/fill/zalo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon/fill/zalo">
          <g clipPath="url(#clip0_1_2522)">
            <g id="Original">
              <path d={svgPaths.p27ced100} fill="#0068FF" />
              <path d={svgPaths.p1646c200} fill="#0068FF" />
              <path d={svgPaths.p1520e4f0} fill="#0068FF" />
              <path d={svgPaths.p275f9d00} fill="#0068FF" />
              <path d={svgPaths.p362bf380} fill="#0068FF" />
              <path d={svgPaths.p385d7e00} fill="white" />
              <path d={svgPaths.p1c955c40} fill="white" />
              <path d={svgPaths.p1cdfcdf0} fill="white" />
              <path d={svgPaths.pcc5f980} fill="var(--fill-0, #005BE0)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2522">
            <rect fill="white" height="32" rx="1.125" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillZalo />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#3167f3] text-[14px] text-center w-[min-content]">
        <p className="mb-0">{`ZALO `}</p>
        <p>Hỗ trợ</p>
      </div>
    </div>
  );
}

function IconFillTelegram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon/fill/telegram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_2518)" id="Icon/fill/telegram">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, #039BE5)" id="Vector" />
          <path d={svgPaths.p17d40100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2518">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillTelegram />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3167f3] text-[14px] text-center w-[min-content]">
        <p className="leading-[24px]">Liên Kết Telegram</p>
      </div>
    </div>
  );
}

function Color() {
  return (
    <div className="absolute contents inset-0" data-name="Color">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="02.YouTube">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, #FF0000)" id="Background" />
          <path d={svgPaths.p38137d30} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 2">
      <Color />
    </div>
  );
}

function IconFillYoutube() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon/fill/youtube">
      <Layer1 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillYoutube />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3167f3] text-[14px] text-center w-[min-content]">
        <p className="leading-[24px]">Youtube HDSD</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame101 />
      <Frame103 />
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <Header1 />
      <Frame102 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="h-[24px] rounded-[99px] shrink-0 w-[6px]" />
      <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">
        <p className="leading-[24px]">Câu hỏi thường gặp</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-0 relative shrink-0 w-[15.005px]">
      <div className="absolute inset-[-1px_-6.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
          <g id="Group 35602">
            <path d="M1 1H16.0046" id="Vector" stroke="var(--stroke-0, #3167F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#3167f3] text-[16px]">{` Tôi cần bảo hành?`}</p>
      <Group7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] opacity-60 relative shrink-0 text-[#333333] text-[14px] w-full">Bạn đọc chú ý, xem đơn có được bảo hành hay k? Nếu server có nút bảo hành thì chọn bảo hành, nếu không có hãy inbox qua fanpage support.</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.005px]">
      <div className="absolute inset-[-7.14%_-6.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="Group 35621">
            <path d="M8.50101 1V15" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M1 8H16.0046" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">{` Tôi nạp tiền nhưng chưa nhận được!`}</p>
      <Group8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex h-0 items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "319", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none scale-y-[-100%] skew-x-[317.625deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(51, 51, 51, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
                <line id="Line 6" stroke="var(--stroke-0, #333333)" strokeOpacity="0.08" x2="319" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.005px]">
      <div className="absolute inset-[-7.14%_-6.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="Group 35621">
            <path d="M8.50101 1V15" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M1 8H16.0046" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">{` Dịch vụ mua không chạy?`}</p>
      <Group9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex h-0 items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "319", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none scale-y-[-100%] skew-x-[317.625deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(51, 51, 51, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
                <line id="Line 6" stroke="var(--stroke-0, #333333)" strokeOpacity="0.08" x2="319" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Header2 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="h-[24px] rounded-[99px] shrink-0 w-[6px]" />
      <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">
        <p className="leading-[24px]">Video hướng dẫn sử dụng</p>
      </div>
    </div>
  );
}

function Component1759158932111ThDCh4VxG7Jpg() {
  return (
    <div className="aspect-[400/400] relative shrink-0 w-full" data-name="1759158932111_ThDCh4vxG7.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1759158932111ThDCh4VxG7Jpg} />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[195px] items-start justify-center left-0 overflow-clip rounded-[12px] top-0 w-[319px]" data-name="Body">
      <Component1759158932111ThDCh4VxG7Jpg />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[45.333px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 32">
        <g id="SVG">
          <path d={svgPaths.p182207c0} fill="var(--fill-0, #FF0033)" id="Vector" />
          <path d={svgPaths.p39cc4000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPlay() {
  return (
    <div className="absolute h-[32px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[45px]" data-name="Button - Play">
      <Svg />
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[195px] relative shrink-0 w-full">
      <Body />
      <ButtonPlay />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Header3 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#3167f3] content-stretch flex items-start px-[12px] py-[5.7px] relative rounded-[6px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[21px] whitespace-pre">Liên kết ngay</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#333333] text-[14px] w-[min-content]">
        <p className="leading-[21px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`🔹 `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Khách hàng mới:</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{` Liên kết `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Telegram</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{` để nhận tất cả thông báo và bảo mật tài khoản `}</span>
        </p>
      </div>
      <Link />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`🔹 `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Lưu ý:</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{` Tài khoản sẽ bị xoá nếu `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`sau 5 ngày không phát sinh giao dịch `}</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`🔹 `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Đại lý từ website khác:</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{` Liên hệ admin qua Zalo: `}</span>
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">0928976666</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{` để được nâng cấp.`}</span>
        </p>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] pt-0 px-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="h-[24px] rounded-[99px] shrink-0 w-[6px]" />
      <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[16px]">
        <p className="leading-[24px]">Dịch Vụ Mạng Xã Hội</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_4810)" id="Frame" opacity="0.5">
          <path d={svgPaths.pc278efc} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p19874e80} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_4810">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-50 relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Nhập link bài viết</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Frame />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[15.29px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="image">
          <path d={svgPaths.p397cf480} fill="var(--fill-0, #333333)" id="Vector" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col h-[16.89px] items-start justify-center overflow-clip pl-[0.8px] pr-[16.39px] py-[0.8px] relative shrink-0 w-[32.48px]" data-name="image fill">
      <Image />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#edf3fa] content-stretch flex flex-col h-[16.89px] items-start relative rounded-[99px] shrink-0 w-[32.48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <ImageFill />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Input />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Mua nhiều đơn cùng lúc</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[1.5]">Link:</p>
      </div>
      <Frame39 />
      <Frame67 />
    </div>
  );
}

function IconFillFacebook1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/fill/facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p1387aa00} fill="var(--fill-0, #1877F2)" id="Vector" />
          <path d={svgPaths.p362f9480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillFacebook1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[24.94%_6.2%_24.95%_6.19%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
        <g id="Layer_1">
          <path d={svgPaths.p28076c00} fill="var(--fill-0, #333333)" id="Vector" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Fi1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[10px]" data-name="fi_6364586">
      <Layer />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#edf3fa] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame42 />
          <Fi1 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Nền tảng</p>
      </div>
      <Frame43 />
    </div>
  );
}

function IconFillFacebook2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/fill/facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p1387aa00} fill="var(--fill-0, #1877F2)" id="Vector" />
          <path d={svgPaths.p362f9480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconFillFacebook2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Tăng Like Bài Viết</p>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute inset-[24.94%_6.2%_24.95%_6.19%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
        <g id="Layer_1">
          <path d={svgPaths.p28076c00} fill="var(--fill-0, #333333)" id="Vector" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Fi2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[10px]" data-name="fi_6364586">
      <Layer2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#edf3fa] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame44 />
          <Fi2 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Dịch vụ</p>
      </div>
      <Frame45 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(49, 103, 243, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Container">
            <rect fill="var(--fill-0, white)" height="19" rx="9.5" width="19" x="0.5" y="0.5" />
            <rect height="19" rx="9.5" stroke="var(--stroke-0, #3167F3)" width="19" x="0.5" y="0.5" />
            <circle cx="10" cy="10" fill="var(--fill-0, #3167F3)" id="Ellipse 4" r="6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#333333]">{` Server 5 :`}</p>
      <p className="relative shrink-0 text-[#333333]">Like việt.</p>
      <p className="relative shrink-0 text-[#1bb42d]">23 ₫</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Container6 />
      <Frame60 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[rgba(49,103,243,0.1)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Hoạt động</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <Frame59 />
      </div>
      <Background1 />
    </div>
  );
}

function MoT() {
  return (
    <div className="bg-[rgba(49,103,243,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Mô tả">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[21px] relative shrink-0 text-[#3167f3] text-[14px] w-full">
            <p className="mb-0">ID: 180</p>
            <p className="mb-0 text-[#333333]">- Được phép dồn sl , mua 10k có thể mua 5 lần 2k cùng 1 lúc cho nhanh</p>
            <p className="mb-0 text-[#333333]">- Có hỗ trợ mua cùng lúc nhiều cảm xúc, số lượng sẽ được phân chia ngẫu nhiên.( nếu fb quét tỉ lệ chủ yếu hoặc hoàn</p>
            <p className="mb-0 text-[#333333]">toàn là Like. Nên hãy chọn riêng cảm xúc để đạt số lượng mong muốn)</p>
            <p className="mb-0 text-[#333333]">- Không hỗ trợ like bài video trong album( vì server này sẽ nhảy like lên bài album)</p>
            <p className="mb-0 text-[#333333]">- Không hỗ trợ cảm xúc cho bài reels ( cố tình mua sẽ hoàn thành gói không hoàn tiền)</p>
            <p className="text-[#333333]">Tối thiểu/Tối đa: 50/200k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame61 />
          <MoT />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[99px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#333333]">{` Server 4: `}</p>
      <p className="relative shrink-0 text-[#333333]">Like việt.</p>
      <p className="relative shrink-0 text-[#1bb42d]">23 ₫</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Container7 />
      <Frame77 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[rgba(49,103,243,0.08)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Hoạt động</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame78 />
      </div>
      <Background2 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[99px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#333333]">{` Server 3: `}</p>
      <p className="relative shrink-0 text-[#333333]">Like việt.</p>
      <p className="relative shrink-0 text-[#1bb42d]">23 ₫</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Container8 />
      <Frame80 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[rgba(49,103,243,0.08)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Hoạt động</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame81 />
      </div>
      <Background3 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Frame82 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[99px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#333333]">{` Server 2: `}</p>
      <p className="relative shrink-0 text-[#333333]">Like việt.</p>
      <p className="relative shrink-0 text-[#1bb42d]">23 ₫</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Container9 />
      <Frame83 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[rgba(49,103,243,0.08)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Hoạt động</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame85 />
      </div>
      <Background4 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[99px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#333333]">{` Server 1: `}</p>
      <p className="relative shrink-0 text-[#333333]">Like việt.</p>
      <p className="relative shrink-0 text-[#1bb42d]">23 ₫</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Container10 />
      <Frame87 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[rgba(49,103,243,0.08)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Hoạt động</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame88 />
      </div>
      <Background5 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <Frame89 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Chọn server</p>
      </div>
      <Frame90 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p2efd1000} fill="url(#paint0_radial_1_2649)" id="Vector" />
          <path d={svgPaths.p2d8f5300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(16.7575 14.9272) rotate(77.6772) scale(33.8788 33.8788)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2649" r="1">
            <stop stopColor="#18AFFF" />
            <stop offset="1" stopColor="#0062DF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p2efd1000} fill="url(#paint0_radial_1_2616)" id="Vector" />
          <path d={svgPaths.p2ad24300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(6.49748 25.4122 -25.4118 6.49755 21.3744 21.345)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2616" r="1">
            <stop stopColor="#FF8297" />
            <stop offset="0.1592" stopColor="#FD7A90" />
            <stop offset="0.4121" stopColor="#F8637B" />
            <stop offset="0.7251" stopColor="#EF3D5B" />
            <stop offset="1" stopColor="#E61739" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group1 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[48.001px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p339c8e00} fill="url(#paint0_radial_1_4785)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p339c8e00} fill="url(#paint1_radial_1_4785)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3f8b3400} fill="url(#paint2_linear_1_4785)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint3_linear_1_4785)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint4_radial_1_4785)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint5_radial_1_4785)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint6_radial_1_4785)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint7_radial_1_4785)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint8_radial_1_4785)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1cbc0000} fill="url(#paint9_radial_1_4785)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p13993900} fill="url(#paint10_radial_1_4785)" fillRule="evenodd" id="Vector_11" />
          <path d={svgPaths.p3cf7b100} fill="url(#paint11_radial_1_4785)" id="Vector_12" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p2798a000} fill="url(#paint12_radial_1_4785)" fillRule="evenodd" id="Vector_13" />
            <path clipRule="evenodd" d={svgPaths.p3cace300} fill="url(#paint13_radial_1_4785)" fillRule="evenodd" id="Vector_14" />
          </g>
          <g id="Group_3">
            <path clipRule="evenodd" d={svgPaths.p19630400} fill="url(#paint14_radial_1_4785)" fillRule="evenodd" id="Vector_15" />
            <path d={svgPaths.p28bb0c80} fill="var(--fill-0, #4E506A)" id="Vector_16" />
            <path clipRule="evenodd" d={svgPaths.p19630400} fill="url(#paint15_radial_1_4785)" fillRule="evenodd" id="Vector_17" />
            <path d={svgPaths.p28bb0c80} fill="var(--fill-0, #4E506A)" id="Vector_18" />
            <path clipRule="evenodd" d={svgPaths.p313b0900} fill="url(#paint16_radial_1_4785)" fillRule="evenodd" id="Vector_19" />
            <path clipRule="evenodd" d={svgPaths.p313b0900} fill="url(#paint17_radial_1_4785)" fillRule="evenodd" id="Vector_20" />
            <path d={svgPaths.p1e74b200} fill="var(--fill-0, #4E506A)" id="Vector_21" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(19.0783 12.4553) scale(35.8082 35.809)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4785" r="1">
            <stop stopColor="#FFED85" />
            <stop offset="0.1898" stopColor="#FFE180" />
            <stop offset="0.5295" stopColor="#FFC273" />
            <stop offset="0.9773" stopColor="#FF915E" />
            <stop offset="1" stopColor="#FF8E5D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(19.1725 14.1501) scale(22.2905 22.2909)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_4785" r="1">
            <stop stopColor="#FFEA84" stopOpacity="0" />
            <stop offset="1" stopColor="#F08423" stopOpacity="0.34" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_4785" x1="24.0002" x2="24.0002" y1="19.8194" y2="17.0444">
            <stop stopColor="#3F1D04" />
            <stop offset="1" stopColor="#7E2307" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_4785" x1="20.2348" x2="14.1428" y1="29.2475" y2="48.8739">
            <stop stopColor="#F34462" />
            <stop offset="1" stopColor="#CC0820" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.40362 2.75238 -2.75233 7.40377 26.5602 32.8371)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_4785" r="1">
            <stop stopColor="#FF7091" stopOpacity="0.7" />
            <stop offset="1" stopColor="#FE6D8E" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.40362 2.75238 -2.75233 7.40377 12.8435 28.8582)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_4785" r="1">
            <stop stopColor="#FF7091" stopOpacity="0.7" />
            <stop offset="1" stopColor="#FE6D8E" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1.36484 6.64326 -9.1477 -1.87947 11.9889 35.3279)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_4785" r="1">
            <stop stopColor="#9C0600" />
            <stop offset="1" stopColor="#9C0600" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.51536 2.08177 -2.61265 4.41197 34.2789 36.0028)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_4785" r="1">
            <stop stopColor="#9C0600" stopOpacity="0.5" />
            <stop offset="1" stopColor="#9C0600" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.32388 -1.22026 1.57249 4.28339 6.19215 27.3605)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_4785" r="1">
            <stop stopColor="#9C0600" stopOpacity="0.5" />
            <stop offset="1" stopColor="#9C0600" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.94819 2.67032 -2.89209 4.27624 26.8456 41.7659)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_4785" r="1">
            <stop stopColor="#9C0600" stopOpacity="0.999" />
            <stop offset="1" stopColor="#9C0600" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-0.476968 22.4119) scale(21.2915 21.2919)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_4785" r="1">
            <stop stopColor="#FF9F64" />
            <stop offset="1" stopColor="#FFE682" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(46.1943 24.9702) scale(27.3858 27.3863)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_4785" r="1">
            <stop stopColor="#FF9F64" />
            <stop offset="1" stopColor="#FFE682" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(0.204602 -1.3589 6.38359 0.961166 33.741 4.89874)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_4785" r="1">
            <stop stopColor="#E38200" />
            <stop offset="1" stopColor="#D16C00" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.204602 -1.3589 -6.3836 0.961166 14.1051 4.89891)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_4785" r="1">
            <stop stopColor="#E38200" />
            <stop offset="1" stopColor="#D16C00" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(33.224 12.9322) rotate(-90) scale(5.57894 5.57912)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_4785" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(33.224 12.9322) rotate(-90) scale(5.57894 5.57912)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_4785" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(14.6176 12.9321) rotate(-90) scale(5.57894 5.57912)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_4785" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(14.6176 12.9321) rotate(-90) scale(5.57894 5.57912)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_4785" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group2 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.pde86500} fill="url(#paint0_radial_1_4739)" id="Vector" />
          <path d={svgPaths.p2a64d300} fill="url(#paint1_radial_1_4739)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p8144b80} fill="url(#paint2_linear_1_4739)" id="Vector_3" />
            <path d={svgPaths.p322a1600} fill="url(#paint3_linear_1_4739)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p31abe580} fill="url(#paint4_radial_1_4739)" id="Vector_5" />
            <path d={svgPaths.pf2503c0} fill="url(#paint5_radial_1_4739)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.05667 32.493 -33.4535 -0.0587852 23.6918 19.8665)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4739" r="1">
            <stop stopColor="#FFED85" />
            <stop offset="0.1898" stopColor="#FFE180" />
            <stop offset="0.5295" stopColor="#FFC273" />
            <stop offset="0.9773" stopColor="#FF915E" />
            <stop offset="1" stopColor="#FF8E5D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(12.9565 11.8768) scale(39.8631 40.0131)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_4739" r="1">
            <stop stopColor="#FFEA84" stopOpacity="0" />
            <stop offset="1" stopColor="#F08423" stopOpacity="0.34" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_4739" x1="23.8478" x2="23.8478" y1="24.7472" y2="45.7713">
            <stop stopColor="#3F1D04" />
            <stop offset="1" stopColor="#7E2307" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_4739" x1="23.878" x2="23.878" y1="34.5222" y2="41.9017">
            <stop stopColor="#FC607C" />
            <stop offset="1" stopColor="#D91F3A" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(15.8791 16.1974) scale(5.01132 5.03017)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_4739" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.8493 16.1973) scale(5.01696 5.03584)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_4739" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group3 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p3bb8580} fill="url(#paint0_radial_1_4756)" id="Vector" />
          <path d={svgPaths.p3bb8580} fill="url(#paint1_radial_1_4756)" id="Vector_2" />
          <path d={svgPaths.p21107fc0} fill="url(#paint2_linear_1_4756)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p2c1c9680} fill="var(--fill-0, #E27421)" id="Vector_4" />
            <path d={svgPaths.pb892df0} fill="var(--fill-0, #E27421)" id="Vector_5" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2e8fa600} fill="url(#paint3_radial_1_4756)" id="Vector_6" />
            <path d={svgPaths.p15898d80} fill="var(--fill-0, #4E506A)" id="Vector_7" />
            <path d={svgPaths.p2000e040} fill="url(#paint4_radial_1_4756)" id="Vector_8" />
            <path d={svgPaths.p663db00} fill="var(--fill-0, #4E506A)" id="Vector_9" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(23.6632 19.868) rotate(90.1003) scale(32.458 33.5432)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4756" r="1">
            <stop stopColor="#FFED85" />
            <stop offset="0.1898" stopColor="#FFE180" />
            <stop offset="0.5295" stopColor="#FFC273" />
            <stop offset="0.9773" stopColor="#FF915E" />
            <stop offset="1" stopColor="#FF8E5D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(13.1049 11.892) scale(39.9692 39.9692)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_4756" r="1">
            <stop stopColor="#FFEA84" stopOpacity="0" />
            <stop offset="1" stopColor="#F08423" stopOpacity="0.34" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_4756" x1="23.9993" x2="23.9993" y1="23.8713" y2="41.7604">
            <stop stopColor="#3F1D04" />
            <stop offset="1" stopColor="#7E2307" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(33.168 17.1599) scale(4.29048 4.29049)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_4756" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(14.8772 17.1598) rotate(180) scale(4.2905 4.29049)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_4756" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group4 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p163ce800} fill="url(#paint0_radial_1_2661)" id="Vector" />
          <path d={svgPaths.p163ce800} fill="url(#paint1_radial_1_2661)" id="Vector_2" />
          <path d={svgPaths.p16c0ed00} fill="url(#paint2_linear_1_2661)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.pb8615b2} fill="url(#paint3_linear_1_2661)" id="Vector_4" />
            <path d={svgPaths.p33f4f880} fill="url(#paint4_radial_1_2661)" id="Vector_5" />
            <path d={svgPaths.p21dd2e80} fill="url(#paint5_linear_1_2661)" id="Vector_6" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p251dac80} fill="url(#paint6_radial_1_2661)" id="Vector_7" />
            <path d={svgPaths.p3f10bc00} fill="var(--fill-0, #4E506A)" id="Vector_8" />
            <path d={svgPaths.p13be4600} fill="url(#paint7_radial_1_2661)" id="Vector_9" />
            <path d={svgPaths.p126984c0} fill="var(--fill-0, #4E506A)" id="Vector_10" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p9b2daf0} fill="url(#paint8_linear_1_2661)" id="Vector_11" />
            <path d={svgPaths.p3cffcf00} fill="url(#paint9_linear_1_2661)" id="Vector_12" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(24.0234 10.8293) rotate(90.1003) scale(37.191 53.3944)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2661" r="1">
            <stop stopColor="#FFED85" />
            <stop offset="0.1898" stopColor="#FFE180" />
            <stop offset="0.5295" stopColor="#FFC273" />
            <stop offset="0.9773" stopColor="#FF915E" />
            <stop offset="1" stopColor="#FF8E5D" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(13.0959 11.8954) scale(39.9609 39.9609)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_2661" r="1">
            <stop stopColor="#FFEA84" stopOpacity="0" />
            <stop offset="1" stopColor="#F08423" stopOpacity="0.34" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2661" x1="23.9894" x2="23.9325" y1="32.8206" y2="38.1056">
            <stop stopColor="#3F1D04" />
            <stop offset="1" stopColor="#7E2307" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2661" x1="8.2001" x2="8.2001" y1="45.7452" y2="31.6161">
            <stop stopColor="#20BBF2" />
            <stop offset="1" stopColor="#007EDB" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(7.91538 42.2076) scale(9.25611 9.25609)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_2661" r="1">
            <stop offset="0.0961217" stopColor="#2FD7FC" />
            <stop offset="1" stopColor="#007EDB" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2661" x1="5.47126" x2="5.47126" y1="41.5801" y2="37.1816">
            <stop stopColor="#A8E3FF" stopOpacity="0.799" />
            <stop offset="1" stopColor="#6AE1FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(34.2575 27.3363) rotate(90) scale(4.58593 4.90027)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_2661" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(13.7564 27.3363) rotate(90) scale(4.58593 4.9003)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_2661" r="1">
            <stop stopColor="#3B426A" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2661" x1="35.9866" x2="35.9866" y1="14.8237" y2="21.6172">
            <stop stopColor="#E78E0D" />
            <stop offset="1" stopColor="#CB6000" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2661" x1="12.0129" x2="12.0129" y1="14.8236" y2="21.6171">
            <stop stopColor="#E78E0D" />
            <stop offset="1" stopColor="#CB6000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group5 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p3bb8580} fill="url(#paint0_radial_1_2556)" id="Vector" />
          <path d={svgPaths.p3dfca300} fill="url(#paint1_linear_1_2556)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p1fac6d00} fill="url(#paint2_radial_1_2556)" id="Vector_3" />
            <path d={svgPaths.p29537300} fill="url(#paint3_radial_1_2556)" id="Vector_4" />
            <path d={svgPaths.p3e37e3c0} fill="var(--fill-0, #4F4F67)" id="Vector_5" />
            <path d={svgPaths.p35913970} fill="var(--fill-0, #4F4F67)" id="Vector_6" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2795c200} fill="url(#paint4_linear_1_2556)" id="Vector_7" />
            <path d={svgPaths.p6177d00} fill="url(#paint5_linear_1_2556)" id="Vector_8" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(16.8242 16.0497) rotate(76.293) scale(31.4621 31.4621)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2556" r="1">
            <stop stopColor="#FFB06C" />
            <stop offset="1" stopColor="#FD4545" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2556" x1="23.9999" x2="23.9999" y1="34.8109" y2="38.0336">
            <stop stopColor="#3F1D04" />
            <stop offset="1" stopColor="#7E2307" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(14.3556 26.8499) scale(4.34254 4.34255)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_2556" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(33.6438 26.85) scale(4.34561 4.34561)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_2556" r="1">
            <stop stopColor="#2C445F" />
            <stop offset="0.9792" stopColor="#191A33" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2556" x1="14.2613" x2="14.2613" y1="25.7826" y2="18.7836">
            <stop stopColor="#9A2F00" />
            <stop offset="1" stopColor="#D44800" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2556" x1="33.6809" x2="33.6809" y1="25.7825" y2="18.7835">
            <stop stopColor="#9A2F00" />
            <stop offset="1" stopColor="#D44800" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[48px]">
      <Group6 />
      <div className="bg-white relative rounded-[4px] shrink-0 size-[14px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#a0a5b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[19.49px]">Chọn loại cảm xúc:</p>
      </div>
      <Frame91 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-50 relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Nhập số lượng</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Số lượng</p>
      </div>
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Nhanh</p>
      </div>
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute inset-[24.94%_6.19%_24.95%_6.19%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
        <g id="Layer_1">
          <path d={svgPaths.p28076c00} fill="var(--fill-0, #333333)" id="Vector" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Fi3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[10px]" data-name="fi_6364586">
      <Layer3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame50 />
          <Fi3 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Tốc độ</p>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame49 />
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">23 VND / 1 cảm xúc</p>
      </div>
    </div>
  );
}

function Fi4() {
  return <div className="shrink-0 size-[10px]" data-name="fi_6364586" />;
}

function Frame54() {
  return (
    <div className="bg-[rgba(51,51,51,0.08)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame53 />
          <Fi4 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Giá tiền</p>
      </div>
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function Fi5() {
  return <div className="shrink-0 size-[10px]" data-name="fi_6364586" />;
}

function Frame56() {
  return (
    <div className="bg-[rgba(51,51,51,0.08)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame55 />
          <Fi5 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Tổng Giá</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-50 relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Ghi chú</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[rgba(203,212,234,0.1)] h-[90px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] h-[90px] items-start p-[12px] relative w-full">
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Ghi chú</p>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame68 />
      <Frame40 />
      <Frame41 />
      <Frame46 />
      <Frame69 />
      <Frame92 />
      <Frame93 />
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#fd397a] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fd397a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center leading-[0] px-[16px] py-[8px] relative text-center text-nowrap text-white w-full">
          <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center not-italic relative shrink-0 text-[16.8px]">
            <p className="leading-[0px] text-nowrap whitespace-pre"></p>
          </div>
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px]">
            <p className="leading-[24px] text-nowrap whitespace-pre">Quản Lý ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconOutlineCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Outline/Cart">
          <path d={svgPaths.p13e2d2c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p344cd800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p21d26d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1aa32080} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconOutlineCart />
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#3167f3] grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(49,103,243,0.35)] shrink-0" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Container11 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Mua Ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col gap-[12px] items-center justify-end p-[12px] relative rounded-[24px] shadow-[0px_2px_6px_0px_rgba(189,189,189,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors">
      <Header4 />
      <Frame96 />
      <Frame84 />
    </div>
  );
}

function Component1724360847451TrwUheFq6OJpg() {
  return (
    <div className="max-h-[641.875px] max-w-[641.875px] relative shrink-0 size-[50px]" data-name="1724360847451_TRWUheFQ6o.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1724360847451TrwUheFq6OJpg} />
      </div>
    </div>
  );
}

function VerifiedPng() {
  return (
    <div className="max-w-[138.61px] relative shrink-0 size-[17px]" data-name="verified.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPng} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Quản Trị Viên</p>
      </div>
      <VerifiedPng />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2540)" id="Frame" opacity="0.5">
          <path d="M8 4V8L5.33333 6.66667" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe0ec300} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2540">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-50 relative shrink-0 text-[#333333] text-[12px] text-nowrap">
        <p className="leading-[19.49px] whitespace-pre">2025-05-04 21:14:27</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Component1724360847451TrwUheFq6OJpg />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[851.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[21px] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">KHUYẾN MÃI HALLOWEEN</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">{` – NẠP TIỀN NHẬN THÊM 10% `}</span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">⏰ Thời gian: Từ 10h00 ngày 31/10 đến 23h00 ngày 02/11</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[851.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Chúc quý khách một mùa Halloween thật vui vẻ, đầy ắp tiếng cười, may mắn và những điều bất ngờ ngọt ngào!</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Component1761877419832WNa9LNSlT5Jpg() {
  return (
    <div className="aspect-[400/400] relative shrink-0 w-full" data-name="1761877419832_WNa9lNSlT5.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1761877419832WNa9LNSlT5Jpg} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[15px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component1761877419832WNa9LNSlT5Jpg />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function BaiVit() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col items-start p-[12px] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(189,189,189,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors" data-name="Bài viết">
      <Container19 />
    </div>
  );
}

function Component1724360847451TrwUheFq6OJpg1() {
  return (
    <div className="max-h-[641.875px] max-w-[641.875px] relative rounded-[99px] shrink-0 size-[50px]" data-name="1724360847451_TRWUheFQ6o.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1724360847451TrwUheFq6OJpg} />
      </div>
    </div>
  );
}

function VerifiedPng1() {
  return (
    <div className="max-w-[138.61px] relative shrink-0 size-[17px]" data-name="verified.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVerifiedPng} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Quản Trị Viên</p>
      </div>
      <VerifiedPng1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2540)" id="Frame" opacity="0.5">
          <path d="M8 4V8L5.33333 6.66667" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe0ec300} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2540">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-50 relative shrink-0 text-[#333333] text-[12px] text-nowrap">
        <p className="leading-[19.49px] whitespace-pre">2025-05-04 21:14:27</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Link2 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Component1724360847451TrwUheFq6OJpg1 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[851.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[21px] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">KHUYẾN MÃI HALLOWEEN</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">{` – NẠP TIỀN NHẬN THÊM 10% `}</span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">⏰ Thời gian: Từ 10h00 ngày 31/10 đến 23h00 ngày 02/11</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[851.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="leading-[21px]">Chúc quý khách một mùa Halloween thật vui vẻ, đầy ắp tiếng cười, may mắn và những điều bất ngờ ngọt ngào!</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Component1761877419832WNa9LNSlT5Jpg1() {
  return (
    <div className="aspect-[400/400] relative shrink-0 w-full" data-name="1761877419832_WNa9lNSlT5.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1761877419832WNa9LNSlT5Jpg} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[15px] px-0 relative shrink-0 w-full" data-name="Container">
      <Component1761877419832WNa9LNSlT5Jpg1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function BaiVit1() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col items-start p-[12px] relative rounded-[16px] shadow-[0px_2px_6px_0px_rgba(189,189,189,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full max-w-[343px] transition-colors" data-name="Bài viết">
      <Container27 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center w-full pt-[16px] pb-[16px]">
      <div className="h-[193px] relative rounded-[12px] shrink-0 w-full max-w-[343px]" data-name="image 1427">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1427} />
      </div>
      <Frame100 />
      <Frame31 />
      <Frame99 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <BaiVit />
      {[...Array(2).keys()].map((_, i) => (
        <BaiVit1 key={i} />
      ))}
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="absolute h-[12px] right-[12.5px] top-[16px] w-[66.5px]" data-name="Status Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Status Icons">
          <g id="Network Signal">
            <path d={svgPaths.p2b90f980} fill="var(--fill-0, #121212)" id="NetworkSignal-path" />
            <path d={svgPaths.p9778000} fill="var(--fill-0, #121212)" id="NetworkSignal-path_2" />
            <path d={svgPaths.p2cb61900} fill="var(--fill-0, #121212)" id="NetworkSignal-path_3" />
            <path d={svgPaths.p26488880} fill="var(--fill-0, #121212)" id="NetworkSignal-path_4" />
          </g>
          <path d={svgPaths.p1ead8500} fill="var(--fill-0, #121212)" id="Wi-Fi" />
          <g id="Battery">
            <rect height="11" id="Border" rx="2.16667" stroke="var(--stroke-0, #121212)" width="21.6077" x="42" y="0.5" />
            <path d={svgPaths.p572c0e0} fill="var(--fill-0, #121212)" id="Cap" />
            <rect fill="var(--fill-0, #121212)" height="7.76471" id="Capacity" rx="1.33333" width="18.4972" x="43.5553" y="2.11768" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[10px] top-[13px] w-[75px]" data-name="Time">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">09:41</p>
      </div>
    </div>
  );
}

function IosIPhoneStatusBarWithPhoneNotch() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] h-[44px] overflow-clip relative shrink-0 w-full transition-colors" data-name="IOS iPhone / Status Bar — with phone notch">
      <StatusIcons />
      <Time />
      <div className="absolute h-[31px] left-[112px] top-[-2px] w-[150px]" data-name="Notch">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 31">
          <path clipRule="evenodd" d={svgPaths.p1096f300} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Notch" />
        </svg>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.08)] h-[36px] left-1/2 rounded-[100px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[355px]" data-name="Search bar">
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] left-[calc(50%-50.5px)] not-italic text-[16px] text-black text-nowrap top-[9px] whitespace-pre">hacklike17.com</p>
      <div className="absolute h-[18px] right-[17px] top-1/2 translate-y-[-50%] w-[14px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p2ed63cc0} fill="var(--fill-0, black)" fillOpacity="0.3" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function IosChromeBar({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-[#2a2a2a] dark:bg-[#2a2a2a] h-[80px] relative shrink-0 w-full transition-colors px-4" data-name="Mobile Top Bar">
      <div className="h-full relative rounded-[inherit] w-full flex items-center justify-between gap-3">
        {/* Left Section: Hamburger Menu & Search */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-[#3a3a3a] rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M3 5H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M3 12H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M3 19H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          
          <button className="p-2 hover:bg-[#3a3a3a] rounded-lg transition-colors" aria-label="Search">
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5" />
              <path d="M20 20L17 17" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        
        {/* Center: Language Selector */}
        <div className="flex-1 max-w-[200px]">
          <button className="w-full bg-[#3a3a3a] hover:bg-[#454545] rounded-[24px] px-4 py-2.5 flex items-center justify-between transition-colors">
            <span className="text-white text-[14px]">Chọn ngôn ngữ</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        
        {/* Right Section: Dark Mode Toggle & User Avatar */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-[#3a3a3a] rounded-lg transition-colors" 
            aria-label="Toggle theme"
          >
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              {theme === 'light' ? (
                <>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
                  <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                </>
              ) : (
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="white" strokeWidth="1.5" />
              )}
            </svg>
          </button>
          
          <button className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#3a3a3a]" aria-label="User profile">
            <img 
              src={imgEllipse1} 
              alt="User avatar" 
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function IosIPhoneBrowserChrome({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="IOS iPhone / Browser Chrome">
      <IosChromeBar onMenuClick={onMenuClick} />
    </div>
  );
}

function Frame12({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <IosIPhoneBrowserChrome onMenuClick={onMenuClick} />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d="M3 5H21" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12H21" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 19H21" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[24px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[24px] top-0" data-name="Mask">
      <ImageFill1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Mask Group">
      <Mask />
      <div className="absolute bg-[#333333] left-0 size-[24px] top-0" data-name="Background" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <MaskGroup />
    </div>
  );
}

function LinearSearchMagnifer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Linear / Search / Magnifer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2678)" id="Linear / Search / Magnifer">
          <circle cx="7.66667" cy="7.66667" id="Vector" r="6.33333" stroke="var(--stroke-0, #333333)" />
          <path d={svgPaths.p166c8200} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_2678">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Container28 />
      <LinearSearchMagnifer />
    </div>
  );
}

function Down() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Down (下)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Down (ä¸)" opacity="0.7">
          <path d={svgPaths.p6a52900} fill="var(--fill-0, #333333)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[6px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(51,51,51,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Chọn ngôn ngữ</p>
      <Down />
    </div>
  );
}

function Fi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fi_5915194">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p21790300} fill="var(--fill-0, #3167F3)" id="Vector" />
          <path d={svgPaths.p12d5f80} fill="var(--fill-0, #3167F3)" id="Vector_2" />
          <path d={svgPaths.p3b20400} fill="var(--fill-0, #3167F3)" id="Vector_3" />
          <path d={svgPaths.p2fb30200} fill="var(--fill-0, #3167F3)" id="Vector_4" />
          <path d={svgPaths.p162a0480} fill="var(--fill-0, #3167F3)" id="Vector_5" />
          <path d={svgPaths.p326a7e00} fill="var(--fill-0, #3167F3)" id="Vector_6" />
          <path d={svgPaths.p37f8a80} fill="var(--fill-0, #3167F3)" id="Vector_7" />
          <path d={svgPaths.p3ecf7e00} fill="var(--fill-0, #3167F3)" id="Vector_8" />
          <path d={svgPaths.p37540c80} fill="var(--fill-0, #3167F3)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="bg-[rgba(49,103,243,0.08)] dark:bg-[rgba(49,103,243,0.15)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] cursor-pointer transition-colors hover:bg-[rgba(49,103,243,0.12)]"
    >
      <Fi />
    </button>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="pointer-events-none relative rounded-[24px] shrink-0 size-[24px]" data-name="Credits to Unsplash.com">
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCreditsToUnsplashCom} />
        </div>
        <div aria-hidden="true" className="absolute border-[#e9ecef] border-[0.6px] border-solid inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="flex h-[24.353px] items-center justify-center relative shrink-0 w-[40.211px]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.493deg]">
          <Frame32 />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame98 />
      <Frame18 />
      <Frame5 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white dark:bg-[#2a2a2a] content-stretch flex flex-col items-end justify-center overflow-clip px-[16px] py-[12px] relative rounded-bl-[24px] rounded-br-[24px] shadow-[0px_2px_6px_0px_rgba(161,161,161,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] shrink-0 w-full transition-colors" data-name="tabs">
      <Frame17 />
    </div>
  );
}

function Frame13({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center w-full">
      <Frame12 onMenuClick={onMenuClick} />
    </div>
  );
}

function VuesaxLinearBag() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/bag-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="bag-2">
          <path d={svgPaths.pc54a8c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.82069" />
          <path d={svgPaths.p2b687300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.82069" />
          <path d="M17.0985 13.2414H17.1084" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82069" />
          <path d="M9.37325 13.2414H9.38316" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82069" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxIcon() {
  return (
    <div className="relative shrink-0 size-[26.483px]" data-name="vuesax icon">
      <VuesaxLinearBag />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#7ea2ff] items-center left-[calc(50%+0.5px)] p-[11px] rounded-[24px] size-[48px] to-[#3167f3] top-0 translate-x-[-50%]">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_6px_0px_rgba(161,161,161,0.1)]" />
      <VuesaxIcon />
    </div>
  );
}

function IconOutlineHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Outline/Home">
          <path d={svgPaths.p343e2f80} id="Vector" stroke="var(--stroke-0, #3167F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p34cfaa00} id="Vector_2" stroke="var(--stroke-0, #3167F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="tabMenu1">
      <IconOutlineHome />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3167f3] text-[10px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Trang chủ</p>
      </div>
    </div>
  );
}

function MenuTab() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[16px] relative w-full">
          <TabMenu />
          <div className="absolute bg-[#3167f3] h-[4px] left-[calc(50%-1.38px)] rounded-bl-[40px] rounded-br-[40px] top-0 translate-x-[-50%] w-[32px]" />
        </div>
      </div>
    </div>
  );
}

function IconOutlineNpTin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/nạp tiền">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Outline/náº¡p tiá»n">
          <path d={svgPaths.pe335480} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.16667 18.6667H17.8333" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.3333 9.5H13.6667" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7 16.1667V12" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.3333 16.1667V12" id="Vector_5" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.6667 16.1667V12" id="Vector_6" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M17 16.1667V12" id="Vector_7" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabMenu1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center opacity-50 relative shrink-0" data-name="tabMenu1">
      <IconOutlineNpTin />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[10px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Nạp tiền</p>
      </div>
    </div>
  );
}

function MenuTab1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[8px] py-[16px] relative w-full">
          <TabMenu1 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-end justify-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow h-[15px] justify-center leading-[0] min-h-px min-w-px opacity-50 relative shrink-0 text-[#333333] text-[10px] text-center">
        <p className="leading-[1.5]">Tạo đơn hàng</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-0 py-[16px] relative shrink-0 w-[84px]">
      <Frame16 />
    </div>
  );
}

function IconOutlineMess() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/mess">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Outline/mess">
          <path d={svgPaths.p191f8300} fill="var(--fill-0, #333333)" id="Vector" stroke="var(--stroke-0, #333333)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TabMenu2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center opacity-50 relative shrink-0" data-name="tabMenu1">
      <IconOutlineMess />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[10px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Hỗ trợ</p>
      </div>
    </div>
  );
}

function MenuTab2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[8px] py-[16px] relative w-full">
          <TabMenu2 />
        </div>
      </div>
    </div>
  );
}

function IconOutlineProfile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Outline/Profile">
          <path d={svgPaths.p709d428} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p26f85e40} id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabMenu3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center opacity-50 relative shrink-0" data-name="tabMenu1">
      <IconOutlineProfile />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[10px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Tài khoản</p>
      </div>
    </div>
  );
}

function MenuTab3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[8px] py-[16px] relative w-full">
          <TabMenu3 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex items-end left-1/2 top-[24px] translate-x-[-50%] w-[351px]">
      <MenuTab />
      <MenuTab1 />
      <div className="flex flex-row items-end self-stretch">
        <Frame15 />
      </div>
      <MenuTab2 />
      <MenuTab3 />
    </div>
  );
}

function Navigation() {
  const { theme } = useTheme();
  
  return (
    <div className="relative h-[97px] w-full max-w-[365px] mx-auto mb-[5px]" data-name="Navigation">
      <div className="absolute h-[73px] left-0 right-0 top-[24px]" data-name="Subtract">
        <div className="absolute inset-[-13.7%_-2.19%_-8.22%_-2.19%]" style={{ "--fill-0": theme === 'dark' ? "rgba(42, 42, 42, 1)" : "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 89">
            <g filter="url(#filter0_d_1_4773)" id="Subtract">
              <path d={svgPaths.p2e221900} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="89" id="filter0_d_1_4773" width="381" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4773" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4773" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame3 />
      <Frame14 />
    </div>
  );
}

export default function TrangCh() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="bg-[#edf3fa] dark:bg-[#1a1a1a] relative rounded-tl-[32px] rounded-tr-[32px] h-full w-full overflow-hidden transition-colors" data-name="Trang chủ">
      {/* Overlay */}
      {isSideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsSideMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[258px] bg-white dark:bg-[#2a2a2a] z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSideMenuOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#3a3a3a] rounded-lg transition-colors z-10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        
        <LeftMenu />
      </div>

      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 w-full flex justify-center z-20 bg-[#edf3fa] dark:bg-[#1a1a1a] transition-colors">
        <div className="w-full max-w-[425px]">
          <Frame13 onMenuClick={() => setIsSideMenuOpen(true)} />
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto overflow-x-hidden pt-[120px] pb-[102px]">
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-[425px]">
            <Frame35 />
          </div>
        </div>
      </div>
      
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 w-full flex justify-center z-20">
        <div className="w-full max-w-[425px]">
          <Navigation />
        </div>
      </div>
    </div>
  );
}