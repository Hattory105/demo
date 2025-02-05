const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Platform: 0},
	{Player: 0}
];

self.InstanceType = {
	Platform: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {}
}