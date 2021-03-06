import React from "react";

export const Input = (props) => {
  const {onEnter,onClickAdd, text ,onChangeText, disabled, buttonDisabled} = props;
  return (
    <>
      <input
        type="text"
        placeholder="今日は何する?"
        onKeyDown={onEnter}
        value={text}
        onChange={onChangeText}
        disabled={disabled}
      />
      <button
      disabled={buttonDisabled}
        onClick={() => {
          onClickAdd();

        }}
      >
        追加
      </button>
      
    </>
  );
};
