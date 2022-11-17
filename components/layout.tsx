import React from "react";
import {cls} from "@libs/client/utils";
import Link from "next/link";
import {useRouter} from "next/router";

interface LayoutProps {
	title?: string;
	canGoBack?: boolean;
	hasTabBar?: boolean;
	children: React.ReactNode;
}

export default function Layout({title, canGoBack, hasTabBar, children}: LayoutProps) {
	const router = useRouter();
	const onClick = () => {
		router.back();
	};

	return (
		<div className={router.pathname === "/" ? "h-screen bg-[#F8F8F8]" : ""}>
			{/* Header */}
			<div
				className={"bg-pantone w-full h-12 max-w-xl text-lg px-10 font-medium fixed text-white border-b tp-0 flex items-center"}>
				{canGoBack ? (
					<button onClick={onClick} className={"absolute left-4"}>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						     xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
						</svg>
					</button>
				) : null}

				{title ? (
					<span className={cls(canGoBack ? "mx-2" : "", "text-xl font-bold")}>{title}</span>
				) : null}

				<Link className={"absolute right-3"} href={"/profile/notifications/"}>
					<svg width="25" height="25" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M25.4736 20.9922L22.6518 15.7732V10.3393C22.6518 4.91389 18.246 0.5 12.8305 0.5C7.41493 0.5 3.00907 4.91389 3.00907 10.3393V15.7732L0.18723 20.9921C0.0592621 21.2288 -0.00514456 21.4947 0.000321028 21.7638C0.00578662 22.0328 0.0809369 22.2959 0.218408 22.5271C0.355879 22.7584 0.550956 22.9498 0.784523 23.0828C1.01809 23.2158 1.28214 23.2857 1.55079 23.2857H7.16804C7.15266 23.4563 7.14433 23.6288 7.14433 23.8036C7.14433 25.3144 7.74339 26.7633 8.80974 27.8316C9.87608 28.8998 11.3224 29.5 12.8304 29.5C14.3384 29.5 15.7847 28.8998 16.8511 27.8316C17.9174 26.7633 18.5165 25.3144 18.5165 23.8036C18.5165 23.6288 18.5081 23.4563 18.4927 23.2857H24.11C24.3786 23.2857 24.6426 23.2157 24.8762 23.0828C25.1097 22.9498 25.3047 22.7583 25.4422 22.5271C25.5796 22.2958 25.6548 22.0328 25.6602 21.7637C25.6657 21.4947 25.6013 21.2288 25.4734 20.9922H25.4736ZM16.4489 23.8036C16.4493 24.3017 16.3472 24.7946 16.149 25.2515C15.9508 25.7084 15.6607 26.1194 15.2968 26.459C14.933 26.7985 14.5032 27.0593 14.0342 27.225C13.5653 27.3908 13.0673 27.4579 12.5713 27.4222C12.0753 27.3865 11.592 27.2488 11.1515 27.0177C10.711 26.7865 10.3228 26.4669 10.0111 26.0788C9.69945 25.6906 9.47096 25.2423 9.33993 24.7617C9.20891 24.2812 9.17815 23.7787 9.24959 23.2857H16.4113C16.4361 23.4572 16.4487 23.6303 16.4489 23.8036ZM2.41862 21.2143L5.07673 16.2982V10.3393C5.07673 8.27912 5.89364 6.30334 7.34775 4.84658C8.80185 3.38983 10.774 2.57143 12.8305 2.57143C14.8869 2.57143 16.8591 3.38983 18.3132 4.84658C19.7673 6.30334 20.5842 8.27912 20.5842 10.3393V16.2982L23.2422 21.2143H2.41862Z" fill="white"/>
					</svg>
				</Link>
			</div>

			{/* 본문 */}
			<div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>

			{/* Navigation Bar */}
			{hasTabBar ? (
				<nav className={"bg-white max-w-xl text-pantone border-t fixed bottom-0 w-full pb-3 pt-5 flex justify-between text-xs"}>
					{/* 홈 */}
					<Link href={"/"} legacyBehavior>
						<a
							className={cls(
								"flex flex-col items-center space-y-2 w-1/4",
								router.pathname === "/" ? "font-bold" : ""
							)}
						>
							{router.pathname === "/"
								? (
									<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11.6313C1 10.8954 1 10.5275 1.0987 10.1887C1.18614 9.88855 1.32982 9.60627 1.5227 9.35569C1.74045 9.07281 2.04269 8.84693 2.64719 8.39517L11.6903 1.63693C12.1587 1.28685 12.3929 1.11181 12.6515 1.04453C12.8797 0.985158 13.1203 0.985158 13.3485 1.04453C13.6071 1.11181 13.8413 1.28685 14.3097 1.63693L23.3528 8.39517C23.9573 8.84693 24.2596 9.07281 24.4773 9.35569C24.6702 9.60627 24.8139 9.88855 24.9013 10.1887C25 10.5275 25 10.8954 25 11.6313V20.9003C25 22.3353 25 23.0529 24.7094 23.601C24.4537 24.0831 24.0457 24.4751 23.544 24.7207C22.9735 25 22.2268 25 20.7333 25H5.26667C3.77319 25 3.02646 25 2.45603 24.7207C1.95426 24.4751 1.54631 24.0831 1.29065 23.601C1 23.0529 1 22.3353 1 20.9003V11.6313Z" fill="#6667AB"/>
										<path d="M9 25V15.5195C9 14.802 9 14.4432 9.14532 14.1692C9.27316 13.9281 9.47713 13.7321 9.72801 13.6093C10.0132 13.4696 10.3866 13.4696 11.1333 13.4696H14.8667C15.6134 13.4696 15.9868 13.4696 16.272 13.6093C16.5229 13.7321 16.7268 13.9281 16.8547 14.1692C17 14.4432 17 14.802 17 15.5195V25" fill="#6667AB"/>
										<path d="M9 25V15.5195C9 14.802 9 14.4432 9.14532 14.1692C9.27316 13.9281 9.47713 13.7321 9.72801 13.6093C10.0132 13.4696 10.3866 13.4696 11.1333 13.4696H14.8667C15.6134 13.4696 15.9868 13.4696 16.272 13.6093C16.5229 13.7321 16.7268 13.9281 16.8547 14.1692C17 14.4432 17 14.802 17 15.5195V25M11.6903 1.63693L2.64719 8.39517C2.04269 8.84693 1.74045 9.07281 1.5227 9.35569C1.32982 9.60627 1.18614 9.88855 1.0987 10.1887C1 10.5275 1 10.8954 1 11.6313V20.9003C1 22.3353 1 23.0529 1.29065 23.601C1.54631 24.0831 1.95426 24.4751 2.45603 24.7207C3.02646 25 3.77319 25 5.26667 25H20.7333C22.2268 25 22.9735 25 23.544 24.7207C24.0457 24.4751 24.4537 24.0831 24.7094 23.601C25 23.0529 25 22.3353 25 20.9003V11.6313C25 10.8954 25 10.5275 24.9013 10.1887C24.8139 9.88855 24.6702 9.60627 24.4773 9.35569C24.2596 9.07281 23.9573 8.84693 23.3528 8.39517L14.3097 1.63693C13.8413 1.28685 13.6071 1.11181 13.3485 1.04453C13.1203 0.985158 12.8797 0.985158 12.6515 1.04453C12.3929 1.11181 12.1587 1.28685 11.6903 1.63693Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M9 25V15.5195C9 14.802 9 14.4432 9.14532 14.1692C9.27316 13.9281 9.47713 13.7321 9.72801 13.6093C10.0132 13.4696 10.3866 13.4696 11.1333 13.4696H14.8667C15.6134 13.4696 15.9868 13.4696 16.272 13.6093C16.5229 13.7321 16.7268 13.9281 16.8547 14.1692C17 14.4432 17 14.802 17 15.5195V25M11.6903 1.63693L2.64719 8.39517C2.04269 8.84693 1.74045 9.07281 1.5227 9.35569C1.32982 9.60627 1.18614 9.88855 1.0987 10.1887C1 10.5275 1 10.8954 1 11.6313V20.9003C1 22.3353 1 23.0529 1.29065 23.601C1.54631 24.0831 1.95426 24.4751 2.45603 24.7207C3.02646 25 3.77319 25 5.26667 25H20.7333C22.2268 25 22.9735 25 23.544 24.7207C24.0457 24.4751 24.4537 24.0831 24.7094 23.601C25 23.0529 25 22.3353 25 20.9003V11.6313C25 10.8954 25 10.5275 24.9013 10.1887C24.8139 9.88855 24.6702 9.60627 24.4773 9.35569C24.2596 9.07281 23.9573 8.84693 23.3528 8.39517L14.3097 1.63693C13.8413 1.28685 13.6071 1.11181 13.3485 1.04453C13.1203 0.985158 12.8797 0.985158 12.6515 1.04453C12.3929 1.11181 12.1587 1.28685 11.6903 1.63693Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)
								: (
									<svg width="26" height="26" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 25.5V16.0195C9 15.302 9 14.9432 9.14532 14.6692C9.27316 14.4281 9.47713 14.2321 9.72801 14.1093C10.0132 13.9696 10.3866 13.9696 11.1333 13.9696H14.8667C15.6134 13.9696 15.9868 13.9696 16.272 14.1093C16.5229 14.2321 16.7268 14.4281 16.8547 14.6692C17 14.9432 17 15.302 17 16.0195V25.5M11.6903 2.13693L2.64719 8.89517C2.04269 9.34693 1.74045 9.57281 1.5227 9.85569C1.32982 10.1063 1.18614 10.3886 1.0987 10.6887C1 11.0275 1 11.3954 1 12.1313V21.4003C1 22.8353 1 23.5529 1.29065 24.101C1.54631 24.5831 1.95426 24.9751 2.45603 25.2207C3.02646 25.5 3.77319 25.5 5.26667 25.5H20.7333C22.2268 25.5 22.9735 25.5 23.544 25.2207C24.0457 24.9751 24.4537 24.5831 24.7094 24.101C25 23.5529 25 22.8353 25 21.4003V12.1313C25 11.3954 25 11.0275 24.9013 10.6887C24.8139 10.3886 24.6702 10.1063 24.4773 9.85569C24.2596 9.57281 23.9573 9.34693 23.3528 8.89517L14.3097 2.13693C13.8413 1.78685 13.6071 1.61181 13.3485 1.54453C13.1203 1.48516 12.8797 1.48516 12.6515 1.54453C12.3929 1.61181 12.1587 1.78685 11.6903 2.13693Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)}
							<span>홈</span>
						</a>
					</Link>

					{/* 게시판 */}
					<Link href={"/bulletins"} legacyBehavior>
						<a
							className={cls(
								"flex flex-col items-center space-y-2 w-1/4",
								router.pathname === "/bulletins" ? "font-bold" : ""
							)}
						>
							{router.pathname === "/bulletins"
								? (
									<svg width="26" height="26" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 7.26C1 5.24381 1 4.23572 1.49047 3.46563C1.9219 2.78825 2.61031 2.23752 3.45704 1.89238C4.41965 1.5 5.67976 1.5 8.2 1.5H17.8C20.3202 1.5 21.5804 1.5 22.543 1.89238C23.3897 2.23752 24.0781 2.78825 24.5095 3.46563C25 4.23572 25 5.24381 25 7.26V19.74C25 21.7562 25 22.7643 24.5095 23.5344C24.0781 24.2118 23.3897 24.7625 22.543 25.1076C21.5804 25.5 20.3202 25.5 17.8 25.5H8.2C5.67976 25.5 4.41965 25.5 3.45704 25.1076C2.61031 24.7625 1.9219 24.2118 1.49047 23.5344C1 22.7643 1 21.7562 1 19.74V7.26Z" fill="#6667AB"/>
										<path d="M16 12.3H7M10 17.1H7M19 7.5H7M25 7.26V19.74C25 21.7562 25 22.7643 24.5095 23.5344C24.0781 24.2117 23.3897 24.7625 22.543 25.1076C21.5804 25.5 20.3202 25.5 17.8 25.5H8.2C5.67976 25.5 4.41965 25.5 3.45704 25.1076C2.61031 24.7625 1.9219 24.2117 1.49047 23.5344C1 22.7643 1 21.7562 1 19.74V7.26C1 5.24381 1 4.23572 1.49047 3.46563C1.9219 2.78825 2.61031 2.23752 3.45704 1.89238C4.41965 1.5 5.67976 1.5 8.2 1.5H17.8C20.3202 1.5 21.5804 1.5 22.543 1.89238C23.3897 2.23752 24.0781 2.78825 24.5095 3.46563C25 4.23572 25 5.24381 25 7.26Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)
								: (
									<svg width="26" height="26"  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 11.8H7M10 16.6H7M19 7H7M25 6.76V19.24C25 21.2562 25 22.2643 24.5095 23.0344C24.0781 23.7117 23.3897 24.2625 22.543 24.6076C21.5804 25 20.3202 25 17.8 25H8.2C5.67976 25 4.41965 25 3.45704 24.6076C2.61031 24.2625 1.9219 23.7117 1.49047 23.0344C1 22.2643 1 21.2562 1 19.24V6.76C1 4.74381 1 3.73572 1.49047 2.96563C1.9219 2.28825 2.61031 1.73752 3.45704 1.39238C4.41965 1 5.67976 1 8.2 1H17.8C20.3202 1 21.5804 1 22.543 1.39238C23.3897 1.73752 24.0781 2.28825 24.5095 2.96563C25 3.73572 25 4.74381 25 6.76Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)}
							<span>게시판</span>
						</a>
					</Link>

					{/* 관리자 채팅 */}
					<Link href={"/chats"} legacyBehavior>
						<a
							className={cls(
								"flex flex-col items-center space-y-2 w-1/4",
								router.pathname === "/chats" ? "font-bold" : ""
							)}
						>
							{router.pathname === "/chats"
								? (
									<svg width="26" height="26" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 7.49062C1 5.3062 1 4.21399 1.43597 3.37965C1.81947 2.64574 2.43139 2.04906 3.18404 1.67512C4.03969 1.25 5.15979 1.25 7.4 1.25H18.6C20.8402 1.25 21.9603 1.25 22.816 1.67512C23.5686 2.04906 24.1805 2.64574 24.564 3.37965C25 4.21399 25 5.3062 25 7.49063V14.5113C25 16.6958 25 17.788 24.564 18.6223C24.1805 19.3562 23.5686 19.9529 22.816 20.3268C21.9603 20.752 20.8402 20.752 18.6 20.752H15.245C14.4129 20.752 13.9969 20.752 13.599 20.8316C13.2459 20.9022 12.9043 21.0191 12.5833 21.179C12.2216 21.3592 11.8967 21.6126 11.247 22.1195L8.06634 24.6006C7.51156 25.0334 7.23417 25.2498 7.00072 25.25C6.79769 25.2502 6.60563 25.1602 6.47897 25.0055C6.33333 24.8276 6.33333 24.4812 6.33333 23.7884V20.752C5.09337 20.752 4.47339 20.752 3.96472 20.6191C2.58436 20.2584 1.50617 19.2071 1.1363 17.8611C1 17.3651 1 16.7605 1 15.5514V7.49062Z" fill="#6667AB"/>
										<path d="M8.33333 13.6012C8.33333 13.6012 10.0833 15.5514 13 15.5514C15.9167 15.5514 17.6667 13.6012 17.6667 13.6012" fill="#6667AB"/>
										<path d="M17.3333 7.10059C17.3333 7.45961 17.0349 7.75065 16.6667 7.75065C16.2985 7.75065 16 7.45961 16 7.10059C16 6.74156 16.2985 6.45052 16.6667 6.45052C17.0349 6.45052 17.3333 6.74156 17.3333 7.10059Z" fill="#6667AB"/>
										<path d="M10 7.10059C10 7.45961 9.70152 7.75065 9.33333 7.75065C8.96514 7.75065 8.66667 7.45961 8.66667 7.10059C8.66667 6.74156 8.96514 6.45052 9.33333 6.45052C9.70152 6.45052 10 6.74156 10 7.10059Z" fill="#6667AB"/>
										<path d="M8.33333 13.6012C8.33333 13.6012 10.0833 15.5514 13 15.5514C15.9167 15.5514 17.6667 13.6012 17.6667 13.6012M16.6667 7.10059H16.68M9.33333 7.10059H9.34667M6.33333 20.752V23.7884C6.33333 24.4812 6.33333 24.8276 6.47897 25.0055C6.60563 25.1602 6.79769 25.2502 7.00072 25.25C7.23417 25.2498 7.51156 25.0334 8.06634 24.6006L11.247 22.1195C11.8967 21.6126 12.2216 21.3592 12.5833 21.179C12.9043 21.0191 13.2459 20.9022 13.599 20.8316C13.9969 20.752 14.4129 20.752 15.245 20.752H18.6C20.8402 20.752 21.9603 20.752 22.816 20.3268C23.5686 19.9529 24.1805 19.3562 24.564 18.6223C25 17.788 25 16.6958 25 14.5113V7.49063C25 5.3062 25 4.21399 24.564 3.37965C24.1805 2.64574 23.5686 2.04906 22.816 1.67512C21.9603 1.25 20.8402 1.25 18.6 1.25H7.4C5.15979 1.25 4.03969 1.25 3.18404 1.67512C2.43139 2.04906 1.81947 2.64574 1.43597 3.37965C1 4.21399 1 5.3062 1 7.49062V15.5514C1 16.7605 1 17.3651 1.1363 17.8611C1.50617 19.2071 2.58436 20.2584 3.96472 20.6191C4.47339 20.752 5.09337 20.752 6.33333 20.752ZM17.3333 7.10059C17.3333 7.45961 17.0349 7.75065 16.6667 7.75065C16.2985 7.75065 16 7.45961 16 7.10059C16 6.74156 16.2985 6.45052 16.6667 6.45052C17.0349 6.45052 17.3333 6.74156 17.3333 7.10059ZM10 7.10059C10 7.45961 9.70152 7.75065 9.33333 7.75065C8.96514 7.75065 8.66667 7.45961 8.66667 7.10059C8.66667 6.74156 8.96514 6.45052 9.33333 6.45052C9.70152 6.45052 10 6.74156 10 7.10059Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								) : (
									<svg width="26" height="26" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.33333 13.8512C8.33333 13.8512 10.0833 15.8014 13 15.8014C15.9167 15.8014 17.6667 13.8512 17.6667 13.8512M16.6667 7.35059H16.68M9.33333 7.35059H9.34667M6.33333 21.002V24.0384C6.33333 24.7312 6.33333 25.0776 6.47897 25.2555C6.60563 25.4102 6.79769 25.5002 7.00072 25.5C7.23417 25.4998 7.51156 25.2834 8.06634 24.8506L11.247 22.3695C11.8967 21.8626 12.2216 21.6092 12.5833 21.429C12.9043 21.2691 13.2459 21.1522 13.599 21.0816C13.9969 21.002 14.4129 21.002 15.245 21.002H18.6C20.8402 21.002 21.9603 21.002 22.816 20.5768C23.5686 20.2029 24.1805 19.6062 24.564 18.8723C25 18.038 25 16.9458 25 14.7613V7.74063C25 5.5562 25 4.46399 24.564 3.62965C24.1805 2.89574 23.5686 2.29906 22.816 1.92512C21.9603 1.5 20.8402 1.5 18.6 1.5H7.4C5.15979 1.5 4.03969 1.5 3.18404 1.92512C2.43139 2.29906 1.81947 2.89574 1.43597 3.62965C1 4.46399 1 5.5562 1 7.74062V15.8014C1 17.0105 1 17.6151 1.1363 18.1111C1.50617 19.4571 2.58436 20.5084 3.96472 20.8691C4.47339 21.002 5.09337 21.002 6.33333 21.002ZM17.3333 7.35059C17.3333 7.70961 17.0349 8.00065 16.6667 8.00065C16.2985 8.00065 16 7.70961 16 7.35059C16 6.99157 16.2985 6.70052 16.6667 6.70052C17.0349 6.70052 17.3333 6.99157 17.3333 7.35059ZM10 7.35059C10 7.70961 9.70152 8.00065 9.33333 8.00065C8.96514 8.00065 8.66667 7.70961 8.66667 7.35059C8.66667 6.99157 8.96514 6.70052 9.33333 6.70052C9.70152 6.70052 10 6.99157 10 7.35059Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)}
							<span>관리자 채팅</span>
						</a>
					</Link>

					{/* 마이페이지 */}
					<Link href={"/profile"} legacyBehavior>
						<a
							className={cls(
								"flex flex-col items-center space-y-2 text-pantone w-1/4",
								router.pathname === "/profile" ? "font-bold" : ""
							)}
						>
							{router.pathname === "/profile"
								? (
									<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13 17C8.44816 17 4.40025 19.0408 1.82314 22.208C1.26848 22.8896 0.991144 23.2304 1.00022 23.691C1.00722 24.0469 1.24788 24.4959 1.54942 24.7156C1.93972 25 2.48059 25 3.56233 25H22.4377C23.5194 25 24.0603 25 24.4506 24.7156C24.7521 24.4959 24.9928 24.0469 24.9998 23.691C25.0089 23.2304 24.7315 22.8896 24.1769 22.208C21.5997 19.0408 17.5518 17 13 17Z" fill="#6667AB"/>
										<path d="M13 13C16.5686 13 19.4614 10.3137 19.4614 7C19.4614 3.68629 16.5686 1 13 1C9.43145 1 6.53856 3.68629 6.53856 7C6.53856 10.3137 9.43145 13 13 13Z" fill="#6667AB"/>
										<path d="M13 17C8.44816 17 4.40025 19.0408 1.82314 22.208C1.26848 22.8896 0.991144 23.2304 1.00022 23.691C1.00722 24.0469 1.24788 24.4959 1.54942 24.7156C1.93972 25 2.48059 25 3.56233 25H22.4377C23.5194 25 24.0603 25 24.4506 24.7156C24.7521 24.4959 24.9928 24.0469 24.9998 23.691C25.0089 23.2304 24.7315 22.8896 24.1769 22.208C21.5997 19.0408 17.5518 17 13 17Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M13 13C16.5686 13 19.4614 10.3137 19.4614 7C19.4614 3.68629 16.5686 1 13 1C9.43145 1 6.53856 3.68629 6.53856 7C6.53856 10.3137 9.43145 13 13 13Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								) : (
									<svg width="26" height="26" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13 17.25C8.44816 17.25 4.40025 19.2908 1.82314 22.458C1.26848 23.1396 0.991144 23.4804 1.00022 23.941C1.00722 24.2969 1.24788 24.7459 1.54942 24.9656C1.93972 25.25 2.48059 25.25 3.56233 25.25H22.4377C23.5194 25.25 24.0603 25.25 24.4506 24.9656C24.7521 24.7459 24.9928 24.2969 24.9998 23.941C25.0089 23.4804 24.7315 23.1396 24.1769 22.458C21.5997 19.2908 17.5518 17.25 13 17.25Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M13 13.25C16.5686 13.25 19.4614 10.5637 19.4614 7.25C19.4614 3.93629 16.5686 1.25 13 1.25C9.43145 1.25 6.53856 3.93629 6.53856 7.25C6.53856 10.5637 9.43145 13.25 13 13.25Z" stroke="#6667AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								)}
							<span>마이페이지</span>
						</a>
					</Link>
				</nav>
			) : null}
		</div>
	);
}