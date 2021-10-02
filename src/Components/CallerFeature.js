import React, { useState, useEffect } from "react";
import Twilio from "twilio-client";
import CallButton from "./CallButton";
import InputText from "./InputText";
import Log from "./Log";
import MuteButton from "./MuteButton";
import SelectBox from "./SelectBox";
import Tone from "./Tone";

const CallerFeature = () => {
  const [initialState, setInitialState] = useState({
    muted: false,
    log: "Connecting....",
    onPhone: false,
    countryCode: "+91",
    currentNumber: "",
    isValidNumber: false,
    countries: [{ name: "United States", cc: "1", code: "us" }]
  });

  useEffect(() => {
    Twilio.Device.setup();
    Twilio.Device.disconnect(() => {
      setInitialState((prevState) => {
        return {
          ...prevState,
          onPhone: false,
          log: "Call Ended"
        };
      });
    });

    Twilio.Device.ready(() => {
      setInitialState((prevState) => {
        return {
          ...prevState,
          log: "Connected"
        };
      });
    });
  }, []);

  const handleCodeCountry = (code) => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        countryCode: code
      };
    });
  };

  const handleNumberChange = (e) => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        currentNumber: e.target.value,
        isValidNumber: /^([0-9]|#|\*)+$/.test(
          e.target.value.replace(/[-()\s]/g, "")
        )
      };
    });
  };

  const muteHandling = () => {
    const muted = !initialState.muted;
    setInitialState((prevState) => {
      return {
        ...prevState,
        muted: muted
      };
    });
    Twilio.Device.activeConnection().mute(muted);
  };

  //Making Outbound Call with twilio phone number

  const toggleHandleCall = () => {
    if (!initialState.onPhone) {
      setInitialState((prevState) => {
        return {
          ...prevState,
          muted: false,
          onPhone: true
        };
      });

      //Making call
      const number =
        "+" +
        initialState.countryCode +
        initialState.currentNumber.replace(/\D/g, "");
      Twilio.Device.connect({ number: number });
      setInitialState((prevState) => {
        return {
          ...prevState,
          log: "Calling..." + number
        };
      });
    } else {
      Twilio.Device.disconnectAll();
    }
  };

  return (
    <div id="dialer">
      <div id="dial-form" className="input-group input-group-sm">
        <SelectBox
          countries={initialState.countries}
          countryCode={initialState.countryCode}
          handleOnChange={handleCodeCountry}
        />

        <InputText
          currentNumber={initialState.currentNumber}
          handleOnChange={handleNumberChange}
        />
      </div>

      <div className="controls">
        <CallButton
          handleOnClick={toggleHandleCall}
          disabled={!initialState.isValidNumber}
          onPhone={initialState.onPhone}
        />

        {initialState.onPhone ? (
          <MuteButton handleOnClick={muteHandling} muted={initialState.muted} />
        ) : null}
      </div>

      {initialState.onPhone ? <Tone /> : null}

      <Log text={initialState.log} />
    </div>
  );
};

export default CallerFeature;
