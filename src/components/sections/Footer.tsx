import { Dumbbell, Instagram, ShoppingBag } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
			<div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
				<div className="col-span-1 md:col-span-2">
					<div className="flex items-center gap-3 font-black text-2xl text-white mb-4">
						<div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
							<Dumbbell size={22} strokeWidth={2.5} />
						</div>
						<span>BONUS</span>
						<span className="text-emerald-500">LIFE</span>
					</div>
					<p className="text-gray-400 text-sm max-w-sm font-medium leading-relaxed">
						Potenciando atletas y entusiastas del fitness con suplementación de
						alta calidad y accesorios deportivos.
					</p>
				</div>

				<div>
					<h4 className="text-white font-black mb-4">Enlaces Rápidos</h4>
					<ul className="space-y-2 text-sm font-semibold">
						<li>
							<a href="#" className="hover:text-emerald-500 transition-colors">
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#products"
								className="hover:text-emerald-500 transition-colors"
							>
								Productos
							</a>
						</li>
						<li>
							<a
								href="#benefits"
								className="hover:text-emerald-500 transition-colors"
							>
								Nosotros
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-white font-black mb-4">Contacto</h4>
					<ul className="space-y-2 text-sm font-semibold">
						<li className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer">
							<Instagram size={16} /> @bonus.lifes_
						</li>
						<li className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer">
							<ShoppingBag size={16} /> Tienda Online
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto px-6 pt-8 mt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-semibold">
				© {new Date().getFullYear()} Bonus Life. Todos los derechos reservados.
			</div>
		</footer>
	);
};
