var LoadingConfig = /** @class */ (function () {
    function LoadingConfig(config) {
        if (config === void 0) { config = {}; }
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
    return LoadingConfig;
}());
export { LoadingConfig };
export var ANIMATION_TYPES = {
    threeBounce: 'three-bounce',
    rotatingPlane: 'rotating-plane',
    rectangleBounce: 'rectangle-bounce',
    wanderingCubes: 'wandering-cubes',
    circulosFade: 'circulos-fade',
    pulse: 'pulse',
    circlesSpinner: 'circles-spinner',
    spinner: 'spinner',
    cubeGrid: 'cube-grid',
    foldingCube: 'folding-cube'
};
//# sourceMappingURL=ngx-loading.config.js.map