(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const BackgroundCircle = ({
      radius,
      strokeWidth
    }) => /*#__PURE__*/React__default["default"].createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth
    });

    const Eyes = ({
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius
    }) => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: +eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }));

    const Mouth = ({
      mouthRadius,
      mouthWidth
    }) => {
      const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);
      return /*#__PURE__*/React__default["default"].createElement("path", {
        d: mouthArc()
      });
    };

    const FaceContainer = ({
      children,
      width,
      height,
      centerX,
      centerY
    }) => /*#__PURE__*/React__default["default"].createElement("svg", {
      width: width,
      height: height
    }, /*#__PURE__*/React__default["default"].createElement("g", {
      transform: `translate(${centerX}, ${centerY})`
    }, children));

    const Face = ({
      width,
      height,
      centerX,
      centerY,
      strokeWidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      mouthRadius,
      mouthWidth
    }) => /*#__PURE__*/React__default["default"].createElement(FaceContainer, {
      width: width,
      height: height,
      centerX: centerX,
      centerY: centerY
    }, /*#__PURE__*/React__default["default"].createElement(BackgroundCircle, {
      radius: centerY - strokeWidth / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React__default["default"].createElement(Eyes, {
      eyeOffsetX: eyeOffsetX,
      eyeOffsetY: eyeOffsetY,
      eyeRadius: eyeRadius
    }), /*#__PURE__*/React__default["default"].createElement(Mouth, {
      mouthRadius: mouthRadius,
      mouthWidth: mouthWidth
    }));

    const width = 960;
    const height = 500;

    const App = () => /*#__PURE__*/React__default["default"].createElement(Face, {
      width: width,
      height: height,
      centerX: width / 2,
      centerY: height / 2,
      strokeWidth: 10,
      eyeOffsetX: 90,
      eyeOffsetY: 90,
      eyeRadius: 50,
      mouthRadius: 200,
      mouthWidth: 20
    });

    const rootElement = document.getElementById("root");
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM, d3);
//# sourceMappingURL=bundle.js.map
