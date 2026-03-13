const fs = require('fs');
const path = require('path');

// 读取 package.json 文件
const packageJsonPath = path.join('.', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 获取当前版本号
const currentVersion = packageJson.version;
const versionParts = currentVersion.split('.').map(Number);

const args = process.argv.slice(2); // 获取传入的参数，去掉前两个默认参数

// 处理版本号
if (args?.length) {
	const type = args[0];
	const typeToIndex = {
		first: 0,
		center: 1,
		last: 2,
	};
	const index = typeToIndex?.[type];
	versionParts[index ?? 2] += 1;
} else {
	// 增加补丁版本号;
	versionParts[2] += 1;
}

// 更新版本号
const newVersion = versionParts.join('.');
packageJson.version = newVersion;

// 将更新后的内容写回 package.json 文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Version bumped from ${currentVersion} to ${newVersion}`);
