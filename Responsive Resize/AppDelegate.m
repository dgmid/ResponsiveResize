//
//  AppDelegate.m
//  Responsive Resize
//
//  Created by Duncan Midwinter on 6/2/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

// default user agent string for when there is no currentUAString in NSUserDefaults...
static NSString *defaultUAString = @"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53";


#import "AppDelegate.h"

@implementation AppDelegate
@synthesize ResponsiveResize;


- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
    
    //check to see if a UA String has been recorded...
    appPrefs = [NSUserDefaults standardUserDefaults];
    
    if ( [appPrefs objectForKey:@"currentUAString"] == nil ) {

        //set the currentUAString to default Safari string...
        [appPrefs setObject:defaultUAString forKey:@"currentUAString"];
        [appPrefs synchronize];

    }
    
    
    //set app to accept cookies...
    cookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage];
    [cookieStorage setCookieAcceptPolicy:NSHTTPCookieAcceptPolicyAlways];
    
    
    //WebView...
    NSString *resourcesPath = [[NSBundle mainBundle] resourcePath];
	NSString *htmlPath = [resourcesPath stringByAppendingString:@"/WebApp/index.html"];
	[[ResponsiveResize mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:htmlPath]]];
    
    
    //set UA String for webview...
    [ResponsiveResize setCustomUserAgent:([appPrefs objectForKey:@"currentUAString"])];
    
    
    //setUIDelegate:self (to enable access to context menu...
    [ResponsiveResize setUIDelegate:self];
    
    
    //webview localStorage...
    WebPreferences *prefs = [WebPreferences standardPreferences];
    [prefs _setLocalStorageDatabasePath:@"~/Library/Application Support/ResponsiveResize"];
    [prefs setLocalStorageEnabled:YES];
    [ResponsiveResize setPreferences:prefs];
    
}

//remove unwanted items from webview contextual menu...
- (NSArray *)webView:(WebView *)sender contextMenuItemsForElement:(NSDictionary *)element
    defaultMenuItems:(NSMutableArray *)defaultMenuItems {
    
    
    NSMutableArray *discardedItems = [NSMutableArray array];
    
    NSMenuItem *menuItem;
    
    // NSLog(@"NSmenuItem: %@ with tag: %ld", menuItem, (long)[menuItem tag]);
    
    /*
        items to eliminate:
        
        1 - Open Link in New Window
        2 - Download Linked File
        4 - Open Image in New Window
        5 - Download Image
        7 - Open Frame in New Window
    */
    
    for (menuItem in defaultMenuItems) {
        
        if (    [menuItem tag] == 1 ||
                [menuItem tag] == 2 ||
                [menuItem tag] == 4 ||
                [menuItem tag] == 5 ||
                [menuItem tag] == 7     ) {
            
            [discardedItems addObject:menuItem];
        }
    }
    
    [defaultMenuItems removeObjectsInArray:discardedItems];
    
    return defaultMenuItems;
}


//quit app when all windows are closed...
- (BOOL)applicationShouldTerminateAfterLastWindowClosed:(NSApplication *)theApplication {
    return YES;
}


//change useragent string...
-(void)refreshWebView:(NSString *)uaString {
    
    [appPrefs setObject:uaString forKey:@"currentUAString"];
    [appPrefs synchronize];
    
    [ResponsiveResize setCustomUserAgent: uaString];
    [ResponsiveResize  reload:(@"reload")];
    
}


- (IBAction)openPreferences:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"openPrefsModal()"];
}

- (IBAction)resetApplication:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callResetApplication()"];
}

- (IBAction)openDevices:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"openDevices()"];
}

- (IBAction)rotateDevice:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callRotateDevice()"];
}

- (IBAction)customWidth:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callWidth()"];
}

- (IBAction)customHeight:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callHeight()"];
}

- (IBAction)increaseViewport:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callIncrease()"];
}

- (IBAction)decreaseViewport:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"callDecrease()"];
}

- (IBAction)toggleTheme:(id)sender {
    [ResponsiveResize stringByEvaluatingJavaScriptFromString:@"setStyle()"];
}

- (IBAction)clearCache:(id)sender {
    
    if (NSRunAlertPanel(@"Empty Cache", @"Do you really want to empty the cache?", @"Empty", @"Cancel", NULL) == NSOKButton) {
    
        [[NSURLCache sharedURLCache] removeAllCachedResponses];
        [ResponsiveResize reload:(@"reload")];
    }
}

- (IBAction)deleteCookies:(id)sender {
    
    if (NSRunAlertPanel(@"Delete Cookies", @"Do you really want to delete cookies?", @"Delete", @"Cancel", NULL) == NSOKButton) {
        
        NSArray *allCookies = [cookieStorage cookies];
        
        for(NSHTTPCookie *cookie in allCookies) {
            [cookieStorage deleteCookie:cookie];
        }
    }
}

- (IBAction)openResponsiveResizeSite:(id)sender {
    [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:@"http://responsive-resize.midwinter-dg.com"]];
}

- (IBAction)suggestDevice:(id)sender {
    [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:@"http://responsive-resize.midwinter-dg.com/suggest-a-device-or-user-agent-string.php?a"]];
}


@end
