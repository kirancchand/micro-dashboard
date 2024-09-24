import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
  import './style.css';
  import CarShow from "./components/CarShow";
const generateClassName=createGenerateClassName({
    productionPrefix:'la'   ,
});

export default({history})=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Suspense fallback={null}>
                    <Canvas shadows>
                        <CarShow/>
                    </Canvas>
                </Suspense>
            </div>
        </StylesProvider>
    </div>
}