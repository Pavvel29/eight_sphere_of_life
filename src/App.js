import React from "react";
import Stack from "@mui/material/Stack";
import { ComponentSlider, ComponentPolarArea } from "./Components";
import Box from "@mui/material/Box";
const StackStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const boxStyle = {
  width: "800px",
  minHeight: "600px",
  background: "rgba(244,241,227,.1)",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '@media (max-width: 820px)': {
    width: "100%",
    minHeight: '400px',
  }

};
const SliderBox = {
  width:'600px',
  '@media (max-width: 600px)': {
    width: "100%",
  }
}
export const App = () => {
  const [spirituality, setSpirituality] = React.useState(0); //1)Духовность
  const [health, setHealth] = React.useState(0); //2)Здоровье
  const [money, setMoney] = React.useState(0); //3)Работа, деньги
  const [environment, setEnvironment] = React.useState(0); //4)Окружение,
  const [family, setFamily] = React.useState(0); //5)Личные отношения, семья
  const [rest, setRest] = React.useState(0); //6)Oтдых
  const [personal_Growth, setPersonal_Growth] = React.useState(0); //7)Личный Рост
  const [self_realization, setSelf_realization] = React.useState(0); //8)Самореализация
  const variable = [
    "Духовность",
    "Здоровье",
    "Работа, деньги",
    "Окружение",
    "Личные отношения, семья",
    "Oтдых",
    "Личный Рост",
    "Самореализация",
  ];
  return (
    <Stack sx={StackStyle}>
      <Box sx={SliderBox}>
        <ComponentSlider
          id="spirituality"
          name="Духовность"
          value={spirituality}
          state={setSpirituality}
        />

        <ComponentSlider
          id="health"
          name="Здоровье"
          value={health}
          state={setHealth}
        />

        <ComponentSlider
          id="money"
          name="Работа, деньги"
          value={money}
          state={setMoney}
        />

        <ComponentSlider
          id="environment"
          name="Окружение"
          value={environment}
          state={setEnvironment}
        />

        <ComponentSlider
          id="family"
          name="Личные отношения, семья"
          value={family}
          state={setFamily}
        />

        <ComponentSlider id="rest" name="Oтдых" value={rest} state={setRest} />

        <ComponentSlider
          id="personal_Growth"
          name="Личный Рост"
          value={personal_Growth}
          state={setPersonal_Growth}
        />

        <ComponentSlider
          id="self_realization"
          name="Самореализация"
          value={self_realization}
          state={setSelf_realization}
        />
      </Box>
      <Box sx={boxStyle}>
        <ComponentPolarArea 
        sx={{width:'100%',height:'100%'}}
        variable={variable}
        health={health} 
        spirituality={spirituality} 
        money={money}
        environment={environment}
        family={family}
        rest={rest}
        personal_Growth={personal_Growth}
        self_realization={self_realization}
        />
      </Box>
    </Stack>
  );
};
