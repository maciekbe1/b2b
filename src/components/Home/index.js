import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.js";

import backgroundImage from "../../assets/img/home-page-background.jpg";
import piana from "../../assets/img/piana-pur-ekodom-2.jpg";
import piana2 from "../../assets/img/piana-2.jpg";
import time from "../../assets/img/passage-of-time.png";
import money from "../../assets/img/money.png";

export default function Home() {
	return (
		<>
			<main>
				<div
					className="relative pt-16 pb-32 flex content-center items-center justify-center"
					style={{
						minHeight: "75vh",
					}}
				>
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${backgroundImage})`,
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-60 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div>
									<h1 className="text-white font-semibold text-4xl">
										Ocieplanie pianą poliuretanową
									</h1>
									<p className="mt-4 text-lg text-gray-300">
										Doskonała termoizolacja dla domów jednorodzinnych jak i
										obiektów przemysłowych oraz rolniczych
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
						style={{ height: "70px", transform: "translateZ(0)" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</div>

				<section className="pb-20 bg-gray-300 -mt-24">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
											<i className="fas fa-award"></i>
										</div>
										<h6 className="text-xl font-semibold">Bezpiecznie</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Bezpieczne i skuteczne ocieplanie pianką PUR.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
											<i className="fas fa-retweet"></i>
										</div>
										<h6 className="text-xl font-semibold">Ekonomicznie</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Ocieplanie pianką PUR to mniejsze zuzycie energii.
										</p>
									</div>
								</div>
							</div>

							<div className="pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
											<i className="fas fa-fingerprint"></i>
										</div>
										<h6 className="text-xl font-semibold">Ekologicznie</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Produkty przyjazne dla środowiska naturalnego.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-wrap items-center mt-32">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
									<i className="fas fa-user-friends text-xl"></i>
								</div>
								<h3 className="text-3xl mb-2 font-semibold leading-normal">
									Natrysk pianką poliuretanową
								</h3>
								<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
									Ocieplenie pianką poliuretanową, czyli tzw. termoizolacja
									pianką PUR wymaga specjalistycznej wiedzy i umiejętności.
									Ponieważ precyzyja wykonania i jakość użytych materiałów ma
									kluczowe znaczenie warto zdecydować się na profesjonalną firmę
									z doświadczeniem. Uzyskanie należytej szczelności i jakości
									wymaga precyzji i dokłądności, które synikają z doświadczenia.
								</p>
								<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
									Izolacja poddasza, dachu, podłogi, fundamentu ma duże
									znaczenie, gdyż tą drogą zwykle ucieka dużo ciepła. Ocieplenie
									kluczowych elementów konstrukcji budynku jest ważne, bo
									znacząco wpływa na redukcję kosztów związanych z opłatami za
									ogrzewanie. To ważne, gdyż koszty ogrzewania ciągle rosną.
								</p>
								<Link to="/" className="font-bold text-gray-800 mt-8">
									Sprawdź ofertę!
								</Link>
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600">
									<img
										alt="..."
										src={piana}
										className="w-full align-middle rounded-t-lg"
									/>
									<blockquote className="relative p-8 mb-4">
										<svg
											preserveAspectRatio="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 583 95"
											className="absolute left-0 w-full block"
											style={{
												height: "95px",
												top: "-94px",
											}}
										>
											<polygon
												points="-30,95 583,95 583,65"
												className="text-red-600 fill-current"
											></polygon>
										</svg>
										<h4 className="text-xl font-bold text-white">
											OCIEPLANIE PIANKĄ
										</h4>
										<p className="text-md font-light mt-2 text-white">
											Naszym klientom oferujemy wykonanie izolacji
											najnowocześniejszym (pianka poliuretanowa PUR) dostępnym
											na rynku oraz zapewniamy fachową obsługę. Specjalizujemy
											się w kompleksowym docieplaniu domów Wykonujemy ocieplenia
											poddaszy, dachów (od wewnątrz i od zewnątrz), elewacji,
											tarasów oraz izolację fundamentów.
										</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-16"
						style={{ height: "80px", transform: "translateZ(0)" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-white fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4">
						<div className="items-center flex flex-wrap">
							<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
								<img
									alt="..."
									className="max-w-full rounded-lg shadow-lg"
									src={piana2}
								/>
							</div>
							<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
								<div className="md:pr-12">
									<div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300">
										<i className="fas fa-rocket text-xl"></i>
									</div>
									<h3 className="text-3xl font-semibold">
										Jakość i doświadczenie
									</h3>
									<p className="mt-4 text-lg leading-relaxed text-gray-600">
										Wysoka jakość naszych usług wynika z wiedzy, zaangażowania
										oraz wieloletniego doświadczenia w pracy z pianką
										poliuretanową PUR. Do tej pory zrealizowaliśmy setki usług
										obejmujących ocieplanie i docieplanie pianką PUR budynków,
										domów, magazynów i hal. Skutecznie ocieplamy newralgiczne
										elementy konstrukcyjne budynku, takie jak poddasze, dach,
										ściana czy strop. Główne zalety pianki PUR to:
									</p>
									<ul className="list-none mt-6">
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
														<i className="fas fa-fingerprint"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														Brak mostów termicznych
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
														<i className="fab fa-html5"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														Duża odporność na niekorzystne zewnętrzne czynniki
														atmosferyczne jak wilgoć czy wiatr
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
														<i className="far fa-paper-plane"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														Niski współczynnik przewodzenia ciepła
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
														<i className="far fa-paper-plane"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														Bezpieczeństwo dla zdrowia – po zastygnięciu ma
														całkowicie zwartą strukturę i nie pyli w
														przeciwieństwie do wełny mineralnej.
													</h4>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-20 pb-48">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center text-center mb-12">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-2xl font-semibold">
									Dzięki izolacji pianką poliuretanową OSZCZĘDZASZ:
								</h2>
								{/* <p className="text-lg leading-relaxed m-4 text-gray-600">
									According to the National Oceanic and Atmospheric
									Administration, Ted, Scambos, NSIDClead scentist, puts the
									potentially record maximum.
								</p> */}
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={time}
										className="rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Czas</h5>
										<p className="mt-1 text-sm text-gray-800 uppercase font-semibold">
											Niebywale szybka aplikacja – do 300 m2 w ciągu jednego
											dnia, a już kolejnego dnia można wykonywać dalsze prace.
											Jednorazowy natrysk o szybkości schnięcia 15 sekund.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={money}
										className="rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Pieniądze</h5>
										<p className="mt-1 text-sm text-gray-800 uppercase font-semibold">
											Oszczędność do 50% kosztów energii – znaczne podniesienie
											sprawności energetycznej budynków, dostrzegalne w
											comiesięcznych, niższych kosztach ogrzewania i
											klimatyzacji obiektu (zwrot kosztów różnicy w cenie
											ocieplenia z pozoru tańszymi systemami następuje w bardzo
											krótkim czasie)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-20 relative block bg-gray-900">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-16"
						style={{ height: "80px", transform: "translateZ(0)" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-900 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Build something
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
									Put the potentially record low maximum sea ice extent tihs
									year down to low ice. According to the National Oceanic and
									Atmospheric Administration, Ted, Scambos.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap mt-12 justify-center">
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-medal text-xl"></i>
								</div>
								<h6 className="text-xl mt-5 font-semibold text-white">
									Excelent Services
								</h6>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-poll text-xl"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
									Grow your market
								</h5>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-lightbulb text-xl"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
									Launch time
								</h5>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="relative block py-24 lg:pt-0 bg-gray-900">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
									<div className="flex-auto p-5 lg:p-10">
										<h4 className="text-2xl font-semibold">Napisz do nas</h4>
										<p className="leading-relaxed mt-1 mb-4 text-gray-600">
											Jeśli zastanawiasz się jak skutecznie ocieplić poddasze,
											dom, budynek to dobrze trafiłeś, bo znamy się na tym.
											Wypełnij poniższy formularz, a nasz ekspert skontaktuje
											się z Tobą najszybciej jak będzie to możliwe. Jeśli masz
											wątpliwości czy warto ocieplić poddasze lub dom pianką
											poliuretanową, to zapytaj naszego eksperta od ocieplania
											budynków. Po pierwsze poznasz zalety ocieplenia pianką
											PUR, a po drugie dowiesz się czy w Twoim przypadku warto
											zastosować takie rozwiązanie. Zapraszamy – izolacje
											natryskowe, izolacja poddasza pianką, ocieplenie.
										</p>
										<div className="relative w-full mb-3 mt-8">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="full-name"
											>
												Imie i Nazwisko
											</label>
											<input
												type="text"
												className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
												placeholder="Imie i Nazwisko"
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="email"
											>
												Email
											</label>
											<input
												type="email"
												className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
												placeholder="Email"
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="message"
											>
												Wiadomość
											</label>
											<textarea
												rows="4"
												cols="80"
												className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
												placeholder="Napisz wiadomość..."
											/>
										</div>
										<div className="text-center mt-6">
											<button
												className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
												type="button"
												style={{ transition: "all .15s ease" }}
											>
												Wyślij Wiadomość
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
