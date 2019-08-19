/** Global definitions for development **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

declare module '*.svg';

interface Socket {
	json:any;
	log: any;
	volatile: any;
	broadcast: any;
	in(room: string): Socket;
	to(room: string): Socket;
	join(name: string, fn: Function): Socket;
	unjoin(name: string, fn: Function): Socket;
	set(key: string, value: any, fn: Function): Socket;
	get(key: string, value: any, fn: Function): Socket;
	has(key: string, fn: Function): Socket;
	del(key: string, fn: Function): Socket;
	disconnect(): Socket;
	send(data: any, fn: Function): Socket;
	emit(ev: any): Socket;
}

interface SocketNamespace {
	clients(room: string): Socket[];
	log: any;
	store: any;
	json: any;
	volatile: any;
	in(room: string): SocketNamespace;
	on(evt: string, fn: Function): SocketNamespace;
	to(room: string): SocketNamespace;
	except(id: any): SocketNamespace;
	send(data: any): any;
	emit(data: any): any;
	socket(sid: any, readable: boolean): Socket;
}

interface SocketManager {
	get(key: any): any;
	set(key: any, value: any): SocketManager;
	enable(key: any): SocketManager;
	disable(key: any): SocketManager;
	enabled(key: any): boolean;
	disabled(key: any): boolean;
	configure(env: string, fn: Function): SocketManager;
	configure(fn: Function): SocketManager;
	of(nsp: string): SocketNamespace;
	on(ns: string, fn: Function): SocketManager;
	sockets: SocketNamespace;
}
declare var ASSETS_PATH: string;