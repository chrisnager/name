<cfsavecontent variable="cacheManifest">

CACHE MANIFEST

# Cache Manifest Version: 1.8
 
# Core files.
index.html
 
</cfsavecontent>
 
<cfcontent type="text/cache-manifest" variable="#toBinary( toBase64( trim( cacheManifest ) ) )#" />
