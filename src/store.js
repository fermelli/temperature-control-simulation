import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			heaterTemperature: 50.0,
			maximumTemperature: 20.0,
			simulationTime: 20,
			roomTemperature: 0.0,
			constantK: 0.1,
			currentTemperature: 0.0,
			currentTime: 0,
			turnOnVentilator: false,
			timeOn: 0,
			timeFrame: 100,
		};
	},
	mutations: {
		updateHeaterTemperature(state, heaterTemperature) {
			state.heaterTemperature = heaterTemperature;
		},
		updateMaximumTemperature(state, maximumTemperature) {
			state.maximumTemperature = maximumTemperature;
		},
		updateSimulationTime(state, simulationTime) {
			state.simulationTime = simulationTime;
		},
		updateRoomTemperature(state, roomTemperature) {
			state.currentTemperature = roomTemperature;
			state.roomTemperature = roomTemperature;
		},
		updateConstantK(state, constantK) {
			state.constantK = constantK;
		},
		updateCurrentTemperature(state, currentTemperature) {
			state.currentTemperature = currentTemperature;
		},
		updateCurrentTime(state, currentTime) {
			state.currentTime = currentTime;
		},
		updateTurnOnVentilator(state, turnOnVentilator) {
			state.turnOnVentilator = turnOnVentilator;
		},
		updateTimeOn(state, timeOn) {
			state.timeOn = timeOn;
		},
		updateTimeOn(state, timeFrame) {
			state.timeFrame = timeFrame;
		},
		resetSimulation(state) {
			state.heaterTemperature = 50.0;
			state.maximumTemperature = 20.0;
			state.simulationTime = 20;
			state.roomTemperature = 0.0;
			state.constantK = 0.1;
			state.currentTemperature = 0.0;
			state.currentTime = 0;
			state.turnOnVentilator = false;
			state.timeOn = 0;
		},
	},
	actions: {
		updateHeaterTemperature({ commit }, heaterTemperature) {
			commit('updateHeaterTemperature', heaterTemperature);
		},
		updateMaximumTemperature({ commit }, maximumTemperature) {
			commit('updateMaximumTemperature', maximumTemperature);
		},
		updateSimulationTime({ commit }, simulationTime) {
			commit('updateSimulationTime', simulationTime);
		},
		updateRoomTemperature({ commit }, roomTemperature) {
			commit('updateRoomTemperature', roomTemperature);
		},
		updateConstantK({ commit }, constantK) {
			commit('updateConstantK', constantK);
		},
		updateCurrentTemperature({ commit }, currentTemperature) {
			commit('updateCurrentTemperature', currentTemperature);
		},
		updateCurrentTime({ commit }, currentTime) {
			commit('updateCurrentTime', currentTime);
		},
		updateTurnOnVentilator({ commit }, turnOnVentilator) {
			commit('updateTurnOnVentilator', turnOnVentilator);
		},
		updateTimeOn({ commit }, timeOn) {
			commit('updateTimeOn', timeOn);
		},
		updateTimeOn({ commit }, timeFrame) {
			commit('updateTimeFrame', timeFrame);
		},
		resetSimulation({ commit }) {
			commit('resetSimulation');
		},
	},
	getters: {
		// currentTemperature: (state) => (time) => {
		// 	return (
		// 		state.heaterTemperature -
		// 		(state.heaterTemperature - state.roomTemperature) *
		// 			Math.E ** (-state.constantK * (time / 1000))
		// 	);
		// },
	},
});

export default store;
