import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export const Experiences = () => {
  return (
    <div className="pt-20 w-full">
      <h1 className="underline text-3xl text-white flex text-center tracking-widest">
        Mes expériences
      </h1>
      <div className="flex justify-around pt-10 ">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Minist%C3%A8re_des_Arm%C3%A9es.svg/1200px-Minist%C3%A8re_des_Arm%C3%A9es.svg.png"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Développeur Web Fullstack - 02/2022 - Maintenant
            </Typography>
            <Typography>
              Développement d'une application Web de visualisation de données
              massive en ReactJs et Java 21.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>En savoir plus</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images-porsche.imgix.net/-/media/A94EBA201B724DCA8080B04040108A3D_156FB71137CF4DD59989FD82350B325E_porsche-normal?w=1344&h=756&q=45&crop=faces%2Centropy%2Cedges&auto=format"
              alt="card-image"
              className="h-full"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Stage Support IT - 02/2021 - 08/2021
            </Typography>
            <Typography>
              Support technique et informatique de tous les collaborateurs de
              Porsche France ainsi que les concessions en France.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>En savoir plus</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="white" className="relative h-56 flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd58GjgiOqL1pc1OCXaGOmTRFRBhk17OdIBQ&s"
              alt="card-image"
              className="h-auto w-full"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Diplôme d'ingénieur en Informatique
            </Typography>
            <Typography>
              Formation d'ingenieur en Informatique et Systèmes d'information
              avec spécialité dans l'Innovation par le logiciel à l'Univeristé
              de Technologie de Troyes (UTT)
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>En savoir plus</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
