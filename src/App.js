import React from "react";
import "./themes/global.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

function App() {
	return (
		<div className="h-screen overflow-auto">
			<header class="z-20 sticky top-0 bg-white shadow-sm">
				<nav class="sm:px-12 py-9 flex justify-between">
					<a href="" className="ml-3 -mr-10">
						<img
							className="h-8 w-auto"
							src="https://indoweb.id/wp-content/uploads/2022/12/1.png"
							alt=""
						/>
					</a>
					<div className="hidden pt-1 lg:flex lg:gap-x-12">
						<div className="relative text-menu font-medium text-sm">
							<a href="https://seinfeldquotes.com">Beranda</a>
							<a className="ml-10" href="#">
								Tentang
							</a>
							<a className="ml-10" href="#">
								Harga
							</a>
							<a className="ml-10" href="#">
								Blog
							</a>
							<a className="ml-10" href="#">
								Kontak
							</a>
						</div>
					</div>
					<div className="hidden lg:block 2 mr-3">
						<a
							style={{
								boxShadow: "box-shadow: 0 20px 24px 0 rgb(0 11 40 / 10%)",
							}}
							href="#"
							class="font-medium text-sm text-white rounded shadow-md shadow-boxShadow bg-primary px-10 py-4 hover:bg-menu transition duration-300 ease-out hover:ease"
						>
							Daftar
						</a>
					</div>
				</nav>
			</header>

			<main className="bg-bg w-full flex justify-center items-center">
				<div className="w-full lg:grid md:grid grid-cols-2 px-10 py-10">
					<div className="mx-3">
						<img
							src="https://indoweb.id/wp-content/uploads/2023/02/055.jpg"
							className="rounded-3xl my-10"
							alt=""
						/>
					</div>
					<div className="flex justify-start items-center">
						<div className="mx-2.5">
							<h1 className="text-3xl font-bold text-menu">
								Indoweb.id - Ahlinya Website, Android & Aplikasi
							</h1>
							<p className="mt-3 text-base text-menu">
								<strong>Indoweb.id</strong>&nbsp;adalah perusahan yang bergerak
								dalam bidang pembuatan website, toko online serta software
								development. Pusat Kantor berada di kediri jawa timur indonesia.
								Berdiri sejak 2007 dan menghasilkan banyak produk mulai dari
								website Pendidikan, Perusahaan, Personal, Universitas maupun
								aplikasi web seperti SIM Kampus, HRMS, Keuangan serta aplikasi
								untuk perusahaan. Website mempunyai banyak fungsi dari promosi
								produk sampai transaksi, maka dari itu sebuah website dengan
								tampilan yang bagus serta tingkat keamanan yang tinggi sangat
								diperlukan bagi Anda yang ingin memanfaatkan teknologi internet.
								Kami dengan senang hati akan membantu anda untuk itu.
							</p>
						</div>
					</div>
				</div>
			</main>

			<footer className="h-96 px-20 flex justify-center items-center bg-bg">
				<div>
					<div className="grid grid-cols-3 text-black">
						<div className="flex flex-col pr-20">
							<div className="">
								<img
									className="max-w-xs"
									src="https://indoweb.id/wp-content/uploads/2022/12/logo-idw-fix-300x85.png"
									alt=""
								/>
							</div>
							<p>
								Indoweb.id adalah perusahan yang bergerak dalam bidang pembuatan
								website, toko online serta software development.
							</p>
							<div className="flex mt-5 mb-10">
								<img
									className="w-auto h-24"
									src="https://indoweb.id/wp-content/uploads/2019/04/kominfo-1.png"
									alt=""
								/>
								<img
									width={107}
									src="https://indoweb.id/wp-content/uploads/2019/04/photo_2022-12-08_08-06-53-removebg-preview-168x300.png"
									alt=""
								/>
							</div>
						</div>
						<div className="grid grid-cols-2">
							<div>
								<div className="h-32 flex justify-start items-center">
									<h3
										className="text-slate-600 font-bold text-xl
            "
									>
										Produk
									</h3>
								</div>
								<ul className="leading-10">
									<li>ePesantren</li>
									<li>eSekolah</li>
									<li>eKlinik</li>
									<li>eKoperasi</li>
								</ul>
							</div>
							<div>
								<div className="h-32 flex justify-start items-center">
									<h3 className="text-slate-600 font-bold text-xl">Halaman</h3>
								</div>
								<ul className="leading-10">
									<li>Tentang Kami</li>
									<li>Bantuan</li>
									<li>Blog</li>
									<li>Karir !</li>
									<li>Harga</li>
									<li>Affiliate</li>
								</ul>
							</div>
						</div>
						<div className="px-20 ">
							<div className="h-32 flex justify-start items-center">
								<h3
									className="text-slate-600 font-bold text-xl
            "
								>
									Kontak
								</h3>
							</div>
							<p>
								Alamat : Jl. Elang CC 11,&nbsp; &nbsp; Perum Sukorejo Indah,
								Katang, Sukorejo, Kec.Ngasem, Kediri, Jawa Timur
							</p>
							<p className="mt-5">
								<span>Phone WA:</span>{" "}
								<a href="https://indoweb.id/wa.me/6281233640003">
									0812-3364-0003
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
