let model = global.app.model,
    surveyAddressState = model.enums.surveyAddressState;

module.exports.createSurvey = (address, user) => {
    let surveyAddress = new model.SurveyAddress({
        state: address.state,
        ups: address.ups,
        area: address.area,
        address: address._id,
        surveyAddressState: surveyAddressState.OPEN,
        user
    });
    return surveyAddress.save();
};
