import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";
import AskInput from "@components/AskInput";
import Button from "@components/Button";
import TextArea from "@components/Textarea";

const Ask: NextPage = () => {

	return (
		<Layout title={"문의하기"} hasTabBar canGoBack>
			<Head><title>문의하기</title></Head>
			<form className={"p-4 space-y-4"}>
				<AskInput
					required
					label={"제목"}
					name={"title"}
					type={"title"}
					kind={"title"}
				/>
				<TextArea
					required
					name={"description"}
					label={"내용"}
					placeholder={"문의하실 내용을 입력해주세요."}
				/>
				<div>
					<label
						className={"w-full text-gray-600 hover:text-pantone flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-pantone h-48 rounded-md cursor-pointer "}>
						<svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
							<path
								d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
								strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<input className={"hidden"} type="file"/>
					</label>
				</div>
				<Button text={"문의하기"}/>
			</form>
		</Layout>
	);
}

export default Ask;