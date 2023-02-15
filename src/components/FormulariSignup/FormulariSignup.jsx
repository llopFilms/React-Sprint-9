import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { logosLogin } from "../../lib/constants/logosLogin";
import { BotoLogo } from "../../styles/common/BotoLogo.styles";

const FormulariSignup = () => {
	const correuElectronicRef = useRef();
	const claudePasRef = useRef();
	const claudePasConfirmacioRef = useRef();

	const { error, processant, handleSubmitGoogle, handleSubmitSignup } =
		useFormulari(correuElectronicRef, claudePasRef, claudePasConfirmacioRef);

	const logoGoogle = logosLogin.logoGoogle;

	return (
		<Formulari id="signup" onSubmit={handleSubmitSignup}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectronic"
				referencia={correuElectronicRef}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Contrasenya"
				tipus="password"
				nom="claudePas"
				referencia={claudePasRef}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Confirmació contrasenya"
				tipus="password"
				nom="claudePasConfirmacio"
				referencia={claudePasConfirmacioRef}
				requerit={true}
			/>

			<div className="error">{error && <span>{error}</span>}</div>
			<Boto tipus="submit" deshabilitat={processant}>Crear usuari</Boto>
			<BotoLogo
				tipus="button"
				onClick={handleSubmitGoogle}
				deshabilitat={processant}>
				<img src={logoGoogle} />
				Crear usuari amb Google
			</BotoLogo>
		</Formulari>
	);
};

export default FormulariSignup;