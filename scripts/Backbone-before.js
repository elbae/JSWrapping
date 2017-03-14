			'use strict';
			/* 
				variable used to block multiple write on console
				default value: false -> log shown in popup
			*/
			window["cookie_read_notice"] = false;
			window["cookie_write_notice"] = false;
			window["ui_notice"] = false;
			window["eval_notice"] = false;
			window["document_write_notice"] = false;

			// We do not modify the console logging methods			
			try
			{
				// permission_ui
				Object.defineProperty(window,'permission_ui',{
				      value:${policy_array[0]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_read_cookie
				Object.defineProperty(window,'permission_read_cookie',{
				      value:${policy_array[1]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_write_cookie
				Object.defineProperty(window,'permission_write_cookie',{
				      value:${policy_array[2]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_document_write 
				Object.defineProperty(window,'permission_document_write',{
				      value:${policy_array[3]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_local_storage 
				Object.defineProperty(window,'permission_local_storage',{
				      value:${policy_array[4]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_session_storage
				Object.defineProperty(window,'permission_session_storage',{
				      value:${policy_array[5]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_external_communication 
				Object.defineProperty(window,'permission_external_communication',{
				      value:${policy_array[6]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_navigator 
				Object.defineProperty(window,'permission_navigator',{
				      value:${policy_array[7]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				// permission_notification 
				Object.defineProperty(window,'permission_notification',{
				      value:${policy_array[8]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
				//(Object.freeze || Object)(Object.prototype);			
				// permission_eval 
				Object.defineProperty(window,'permission_eval',{
				      value:${policy_array[9]},
				      configurable:false,
				      writable:false,
				      enumerable:false
				    });
			}
			catch(error){
				console.error()
				console.error(error);

			}
			if( window.hasOwnProperty('permission_ui') && (!permission_ui)){
				// wrapping alert function
				try
				{
					var alert =  new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {
					  	if(window["ui_notice"]){
					  		window["ui_notice"] = false;
					    	try{
					    		console.log('UI DISABLED');
					    	}
					    	catch(error){
					    		//pass
					    	}
					  	}
					  	try{
					  		let log1 = document.getElementById('jswrapper-log1');
					  		log1.value = parseInt(log1.value)+1;
					  	}
					  	catch(error){

					  	}
					  }
					});
					Object.defineProperty(window,'alert',{
				    configurable:false,
				    writable:false,
				    enumerable:false
				  });			
			  }
			  catch(error){
			  	console.error(error);
			  }
				// window.prompt
				try
				{
					var prompt =  new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {
					  	if(window["ui_notice"]){
					  		try{
					  			window["ui_notice"] = false;
					    		console.log('UI DISABLED');
					    	}
					    	catch(error){
					    		//pass
					    	}
					  	}
					  	try{
						  	let log1 = document.getElementById('jswrapper-log1');
						  	log1.value = parseInt(log1.value)+1;
						  }
						  catch(error){
						  	//pass
						  }
					  }
					});
					Object.defineProperty(window,'prompt',{
				    configurable:false,
				    writable:false,
				    enumerable:false
				  });							
			  }
			  catch(error){
			  	console.error(error);
			  }
				// window.confirm
				try
				{
					var confirm =  new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {
					  	if(window["ui_notice"]){
					  		try{
					  			window["ui_notice"] = false;
					  			console.log('UI DISABLED');
					  		}
					  		catch(error){
					  			//pass
					  		}
					  	}
					  	try{
					  		let log1 = document.getElementById('jswrapper-log1');
					  		log1.value = parseInt(log1.value)+1;
					  	}
					  	catch(error){
					  		//pass
					  	}
					  }
					});
					Object.defineProperty(window,'confirm',{
				    configurable:false,
				    writable:false,
				    enumerable:false
				   });			
			  }
			  catch(error){
			  	console.error(error);
			  }
				// window.open
				try
				{
					var open =  new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {
					  	if(window["ui_notice"]){
					  		try{
						  		window["ui_notice"] = false;
						    	console.log('UI DISABLED');
						    }
						    catch(error){
						    	//pass
						    }
					  	}
					  	try{
					  		let log1 = document.getElementById('jswrapper-log1');
					  		log1.value = parseInt(log1.value)+1;	
					  	}
					  	catch(error){
					  		//pass
					  	}
					  	
					  }
					});
					Object.defineProperty(window,'open',{
				    configurable:false,
				    writable:false,
				    enumerable:false
				  });			
			  }
			  catch(error){
			  	console.error(error);
			  }
				try
				{
					if(true){
						window.onbeforeunload = function(e){return ""};
						Object.defineProperty(window,'onbeforeunload',{
					    configurable:false,
					    writable:false,
					    enumerable:false
					  });			
					}
			  }
			  catch(error){
			  	console.error(error);
			  }
			}
			if(window.hasOwnProperty('permission_read_cookie') && window.hasOwnProperty('permission_write_cookie'))
			{
				// false - false
				if( (permission_read_cookie === false) && (permission_write_cookie == false)){
					try
					{
						Object.defineProperty(Document.prototype, 'cookie',{get : function(){},set : function(value){}});
						Object.defineProperty(Document.prototype, 'cookie',{ configurable:false, writable:false});				
						Object.defineProperty(document, 'cookie', {
						    get: function() {
						    	if(window["cookie_read_notice"]){
						    		try{
						    			window["cookie_read_notice"]=false;
					        		console.log('READ COOKIE DISABLED for '+location );		        
					        	}
					        	catch(error){
					        		//pass
					        	}
						    	}
						    	try{
								  	let log2 = document.getElementById('jswrapper-log2');
								  	log2.value = parseInt(log2.value)+1;
								  }
								  catch(error){

								  }
							  	return "";
							    },
						    set: function(val) {
						    	if(window["cookie_write_notice"]){
						    		try{
						    			window["cookie_write_notice"]=false;
					        		console.log('WRITE COOKIE DISABLED for '+location + 'with value: '+val );	
					        	}
					        	catch(error){
					        		//pass
					        	}
						    	}
						    	try{
						    		let log3 = document.getElementById('jswrapper-log3');
							  		log3.value = parseInt(log3.value)+1;
							  	}
							  	catch(error){
							  		//pass
							  	}
						    }
						});			
				  }
				  catch(error){
				  	console.error(error);
				  }					
				} // false - true
				else if( (permission_read_cookie === false) && (permission_write_cookie == true)){
					try
					{
						let old_cookie = Object.getOwnPropertyDescriptor(Document.prototype,'cookie');
						Object.defineProperty(Document.prototype, 'cookie',{get : function(){},set : function(value){}});
						Object.defineProperty(Document.prototype, 'cookie',{ configurable:false, writable:false});				
						Object.defineProperty(document, 'cookie', {
						    get: function() {
						    	if(window["cookie_read_notice"]){
						    		try{
							    		window["cookie_read_notice"]=false;
						        	console.log('READ COOKIE DISABLED for '+location );		        
						        }
						        catch(error){
						        	//pass
						        }
						    	}
						    	try{
								  	let log2 = document.getElementById('jswrapper-log2');
								  	log2.value = parseInt(log2.value)+1;
								  }
								  catch(error){
								  	//pass
								  }
							  	return "";
						    },
						    set: function(val) {
						    	old_cookie.set.call(document,val);
						    }
						});	
				  }
				  catch(error){
				  	console.error(error);
				  }
				} // true - false
				else if( (permission_read_cookie === true) && (permission_write_cookie == false)){
					try
					{
						let old_cookie = Object.getOwnPropertyDescriptor(Document.prototype,'cookie');
						Object.defineProperty(Document.prototype, 'cookie',{get : function(){},set : function(value){}});
						Object.defineProperty(Document.prototype, 'cookie',{ configurable:false, writable:false});				
						Object.defineProperty(document, 'cookie', {
						    get: function() {
						    	return old_cookie.get.call(document);
						    },
						    set: function(val) {
						    	if(window["cookie_write_notice"]){
						    		try{
							    		window["cookie_write_notice"]=false;
						        	console.log('WRITE COOKIE DISABLED for '+location + 'with value: '+val );	
						        }
						        catch(error){
						        	//pass
						        }
						    	}
						    	try{
								  	let log3 = document.getElementById('jswrapper-log3');
								  	log3.value = parseInt(log3.value)+1;
								  }
								  catch(error){
								  	//pass
								  }
						    }
						});			
				  }
				  catch(error){
				  	console.error(error);
				  }		
				}	// true - true
				else{
					// clone the descriptor in old_cookie
					try
					{
						let old_cookie = Object.getOwnPropertyDescriptor(Document.prototype,'cookie');
						// hiding getter and setter for the visible descriptor, disable modification
						Object.defineProperty(Document.prototype, 'cookie',{get : function(){},set : function(value){}});
						Object.defineProperty(Document.prototype, 'cookie',{ configurable:false, writable:false});

						// Editing getter and setter 
						Object.defineProperty(document, 'cookie',{
					    get: function() {
					    	try{
					    		console.log('Getting cookie...');
					    	}
					    	catch(error){
					    		//pass
					    	}
					      return old_cookie.get.call(document);
					    },
					    set: function(value) {
					    	try{
						    	console.log('Setting cookie...'+value);
						    }
						    catch(error){
						    	//pass
						    }
						   	return old_cookie.set.call(document,value);
					    }
						});
				  }
				  catch(error){
				  	console.error(error);
				  }
				}
			}


			if(window.hasOwnProperty('permission_document_write') && (!permission_document_write)){
				try
				{
					document.write =  new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {					  			  	
					  	if(window["document_write_notice"]){
					  		try{
						  		window["document_write_notice"]=false;
						    	console.log('DOCUMENT WRITE DISABLED for '+location );	
						    }
						    catch(error){
						    	//
						    }
					  	}
					  	try{
						  	let log4 = document.getElementById('jswrapper-log4');
						  	log4.value = parseInt(log4.value)+1;
						  }
						  catch(error){
						  	//pass
						  }
					    //return undefined;
					  }
					});
					Object.defineProperty(Document.prototype,'write',{
				    configurable:false,
				    writable:false,
				    enumerable:false
				 	});
				}
				catch(error){
				 	console.error(error);
				}
			}
			// Window.localStorage
			if(window.hasOwnProperty('permission_local_storage') && (!permission_local_storage)){
				try{
					Object.defineProperty(window,'localStorage',{
					value: null,
			    configurable:false,
			    writable:false,
			    enumerable:false
			   	});
				}
				catch(error){
				 	console.error(error);
				}
			}
			// Window.sessionStorage
			if(window.hasOwnProperty('permission_session_storage') && (!permission_session_storage)){
				try{
					Object.defineProperty(window,'sessionStorage',{
					value: null,
			    configurable:false,
			    writable:false,
			    enumerable:false
			   	});
				}
				catch(error){
				 	console.error(error);
				}
			}
			
			if( window.hasOwnProperty('permission_navigator') && (!permission_navigator)){
				try{ /* writable : false, configurable : true*/
					Object.defineProperty(window, 'navigator', {
					value: null,
				  configurable:false,
				  writable:false,
				  enumerable:false
					});
				  Object.defineProperty(window, 'Navigator', {
				   	value:null,
					  configurable:false,
					  writable:false,
					  enumerable:false
					});
				}
				catch(error){
					console.error(error);
				}
			}
			if( window.hasOwnProperty('permission_notification') && (!permission_notification)){
				try{ /* writable : false, configurable : true*/
					Object.defineProperty(window, 'Notification', {
					value: null,
				  configurable:false,
				  writable:false,
				  enumerable:false
					});
				}
				catch(error){
					console.error(error);
				}
			}
			if( window.hasOwnProperty('permission_eval') && (!permission_eval)){
				try{
					window.eval = new Proxy(function() {}, {
					  apply: function(target, thisArg, argumentsList) {			  	
				    	if(window["eval_notice"]){
				    		try{
				    			window["eval_notice"]=false;
				      		console.log('EVAL DISABLED for '+location );	
				      	}
				      	catch(error){
				      		//pass
				      	}
				    	}
				    	try{
						  	let log5 = document.getElementById('jswrapper-log5');
						  	log5.value = parseInt(log5.value)+1;
						  }
						  catch(error){
						  	//pass
						  }
					  }
					});
				  Object.defineProperty(window, 'eval', {
					  configurable:false,
					  writable:false,
					  enumerable:false
					});
				}
				catch(error){
					console.error(error);
				}
			}			
			