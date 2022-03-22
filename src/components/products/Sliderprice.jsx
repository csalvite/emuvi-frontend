import React from 'react';
import { Button } from '@mui/material';
import Slider from '@mui/material/Slider';

function Sliderprice({ sliderNums, handleChangePrices, setPrices }) {
  const marks = [
    {
      value: 0,
      label: '0€',
    },

    {
      value: 200,
      label: '200 €',
    },

    {
      value: 400,
      label: '400€',
    },

    {
      value: 600,
      label: '700€',
    },
    {
      value: 800,
      label: '800 €',
    },

    {
      value: 999,
      label: '999€',
    },
  ];
  return (
    <div>
      {sliderNums[0] <= 0 && sliderNums[1] >= 999 ? (
        <h4>Filtrar por precio:</h4>
      ) : (
        <p>{`${sliderNums[0]}€ - ${sliderNums[1]}€`}</p>
      )}

      <Slider
        sx={{
          width: '14.5rem',
          color: 'sucess.main',
          '&.MuiSlider-thumb': { borderRadius: '0.5px' },
        }}
        value={sliderNums}
        min={0}
        max={999}
        marks={marks}
        step={5}
        onChange={handleChangePrices}
        valueLabelDisplay='auto'
      />
      <div>
        <Button
          size='medium'
          onClick={() => {
            setPrices(sliderNums);
          }}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default Sliderprice;
